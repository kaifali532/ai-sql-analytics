import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import { Upload as UploadIcon, FileSpreadsheet, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<'IDLE' | 'UPLOADING' | 'PROCESSING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) validateAndSetFile(selectedFile);
  };

  const validateAndSetFile = (f: File) => {
    const validTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    if (!validTypes.includes(f.type) && !f.name.endsWith('.csv') && !f.name.endsWith('.xlsx') && !f.name.endsWith('.xls')) {
      setErrorMsg('Please upload a valid CSV or Excel file.');
      return;
    }
    if (f.size > 50 * 1024 * 1024) { // 50MB limit
      setErrorMsg('File size exceeds the 50MB limit.');
      return;
    }
    setFile(f);
    setErrorMsg('');
    setStatus('IDLE');
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setStatus('UPLOADING');
    const formData = new FormData();
    formData.append('file', file);

    try {
      setStatus('PROCESSING');
      // For a real app with background processing, this would return quickly
      // and we would poll or use websockets for the real processing status.
      await api.post('/datasets/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setStatus('SUCCESS');
      setTimeout(() => navigate('/'), 2000);
    } catch (err: any) {
      setStatus('ERROR');
      setErrorMsg(err.response?.data?.error || 'Failed to upload dataset');
    }
  };

  return (
    <div className="max-w-3xl mx-auto h-full flex flex-col pt-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Upload Dataset</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Upload your CSV or Excel file to get started with AI Analytics.</p>
      </div>

      <div 
        className={`glass-card p-12 text-center relative overflow-hidden transition-all duration-300 ${
          isDragging ? 'border-primary bg-primary/5 dark:bg-primary/10 scale-[1.02]' : 'border-dashed'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <AnimatePresence mode="wait">
          {!file ? (
            <motion.div 
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center pointer-events-none"
            >
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <UploadIcon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Drag & Drop your file here</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8">Supported formats: CSV, XLS, XLSX (Max 50MB)</p>
              
              <div className="pointer-events-auto">
                <input 
                  type="file" 
                  id="file-upload" 
                  className="hidden" 
                  accept=".csv, .xls, .xlsx, text/csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  onChange={handleFileChange}
                />
                <label 
                  htmlFor="file-upload" 
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-primary/20 cursor-pointer transition-all"
                >
                  Browse Files
                </label>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="file"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center w-full max-w-sm mx-auto"
            >
              {status === 'IDLE' && (
                <div className="absolute top-4 right-4">
                  <button onClick={() => setFile(null)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                    <XCircle size={24} />
                  </button>
                </div>
              )}
              
              <FileSpreadsheet size={64} className="text-primary mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate w-full px-8 mb-1" title={file.name}>
                {file.name}
              </h3>
              <p className="text-slate-500 text-sm mb-8">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>

              {errorMsg && (
                <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm rounded-lg w-full">
                  {errorMsg}
                </div>
              )}

              {status === 'IDLE' && (
                <button 
                  onClick={handleUpload}
                  className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-primary/20 transition-all flex justify-center items-center gap-2"
                >
                  Start Import
                </button>
              )}

              {(status === 'UPLOADING' || status === 'PROCESSING') && (
                <div className="w-full space-y-4">
                  <div className="flex justify-center items-center text-primary">
                    <Loader2 size={32} className="animate-spin" />
                  </div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    {status === 'UPLOADING' ? 'Uploading file...' : 'Processing dataset (schema inference & dynamic tables)...'}
                  </p>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-primary animate-pulse w-full"></div>
                  </div>
                </div>
              )}

              {status === 'SUCCESS' && (
                <div className="flex flex-col items-center text-green-500">
                  <CheckCircle2 size={48} className="mb-4" />
                  <h3 className="text-xl font-bold">Import Complete!</h3>
                  <p className="text-slate-500 mt-2">Redirecting to dashboard...</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Upload;
