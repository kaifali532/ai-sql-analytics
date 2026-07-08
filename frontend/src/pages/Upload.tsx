import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import { Upload as UploadIcon, FileSpreadsheet, CheckCircle2, XCircle, Loader2, Sparkles } from 'lucide-react';
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
    <div className="max-w-4xl mx-auto min-h-[80vh] flex flex-col justify-center">
      
      <div className="mb-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-4"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold tracking-wide text-primary">Import Data</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-text-base"
        >
          Bring your data to life.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-text-muted mt-4 font-light max-w-2xl mx-auto"
        >
          Upload your CSV or Excel files. We'll automatically infer the schema, build the tables, and prepare it for AI analysis.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`glass-card p-16 md:p-24 text-center relative overflow-hidden transition-all duration-500 ease-out ${
          isDragging 
            ? 'border-primary/40 bg-primary/5 shadow-[0_0_100px_rgba(139,92,246,0.15)] scale-[1.02]' 
            : 'border-black/5 hover:border-black/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Animated Background Gradients */}
        <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${isDragging ? 'opacity-100' : 'opacity-0'}`}>
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
        </div>

        <AnimatePresence mode="wait">
          {!file ? (
            <motion.div 
              key="upload"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center relative z-10"
            >
              <motion.div 
                animate={{ y: isDragging ? -10 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-28 h-28 bg-white shadow-xl shadow-primary/10 text-primary rounded-full flex items-center justify-center mb-8 border border-black/5"
              >
                <UploadIcon size={40} strokeWidth={1.5} />
              </motion.div>
              
              <h3 className="text-3xl font-semibold text-text-base mb-4 tracking-tight">Drag & Drop your file here</h3>
              <p className="text-lg text-text-muted mb-10 font-light">Supported formats: CSV, XLS, XLSX (Max 50MB)</p>
              
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
                  className="bg-black hover:bg-black/80 text-white px-8 py-4 rounded-full font-medium shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 text-lg"
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
              className="flex flex-col items-center w-full max-w-md mx-auto relative z-10"
            >
              {status === 'IDLE' && (
                <div className="absolute -top-4 -right-4">
                  <button onClick={() => setFile(null)} className="p-3 bg-white shadow-sm border border-black/5 rounded-full text-text-muted hover:text-red-500 hover:bg-red-50 transition-colors">
                    <XCircle size={20} />
                  </button>
                </div>
              )}
              
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary text-white rounded-[32px] flex items-center justify-center mb-6 shadow-2xl shadow-primary/30">
                <FileSpreadsheet size={40} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-semibold text-text-base truncate w-full px-4 mb-2 tracking-tight" title={file.name}>
                {file.name}
              </h3>
              <p className="text-text-muted text-lg mb-10 font-light">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>

              {errorMsg && (
                <div className="mb-8 p-4 bg-red-50 text-red-600 text-sm font-medium rounded-2xl w-full border border-red-100">
                  {errorMsg}
                </div>
              )}

              {status === 'IDLE' && (
                <button 
                  onClick={handleUpload}
                  className="w-full bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-secondary text-white px-6 py-4 rounded-full font-medium shadow-[0_8px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_25px_rgba(139,92,246,0.4)] transition-all flex justify-center items-center gap-2 hover:-translate-y-0.5 text-lg"
                >
                  Start Import
                </button>
              )}

              {(status === 'UPLOADING' || status === 'PROCESSING') && (
                <div className="w-full space-y-6">
                  <div className="flex justify-center items-center text-primary">
                    <Loader2 size={40} className="animate-spin" />
                  </div>
                  <p className="font-medium text-text-base text-lg">
                    {status === 'UPLOADING' ? 'Uploading file securely...' : 'Processing dataset with AI schema inference...'}
                  </p>
                  <div className="w-full h-3 bg-black/5 rounded-full overflow-hidden p-0.5">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse w-full"></div>
                  </div>
                </div>
              )}

              {status === 'SUCCESS' && (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center text-green-500"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} strokeWidth={2} />
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight text-text-base">Import Complete</h3>
                  <p className="text-text-muted mt-3 text-lg font-light">Redirecting to your dashboard...</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Upload;
