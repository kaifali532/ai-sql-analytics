import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';
import { useDatasetStore, type Dataset } from '../store/useDatasetStore';
import { useNavigate } from 'react-router-dom';
import { Database, FileSpreadsheet, Trash2, Calendar, HardDrive, Loader2, Play, Sparkles, Activity, Layers } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

const fetchDatasets = async (): Promise<Dataset[]> => {
  const res = await api.get('/datasets');
  return res.data.datasets;
};

const Dashboard = () => {
  const { data: datasets, isLoading, refetch } = useQuery({
    queryKey: ['datasets'],
    queryFn: fetchDatasets,
  });
  const { setCurrentDataset } = useDatasetStore();
  const navigate = useNavigate();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this dataset?')) return;
    try {
      setDeletingId(id);
      await api.delete(`/datasets/${id}`);
      refetch();
    } catch (error) {
      console.error(error);
    } finally {
      setDeletingId(null);
    }
  };

  const handleSelectDataset = (dataset: Dataset) => {
    setCurrentDataset(dataset);
    navigate(`/chat/${dataset.id}`);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  const totalRows = datasets?.reduce((acc, curr) => acc + curr.rowCount, 0) || 0;
  const totalStorage = ((datasets?.reduce((acc, curr) => acc + curr.sizeBytes, 0) || 0) / (1024 * 1024)).toFixed(1);

  return (
    <div className="space-y-12 pb-10">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-black/[0.04] pb-8">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold tracking-wide uppercase text-text-muted">Overview</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-text-base"
          >
            Dashboard
          </motion.h1>
        </div>
        <motion.button 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => navigate('/upload')}
          className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-secondary text-white px-6 py-3.5 rounded-full font-medium shadow-[0_8px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_25px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
        >
          <Database size={18} />
          New Dataset
        </motion.button>
      </div>

      {/* Premium Product Showcase Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Metric 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl group-hover:bg-primary/20 transition-colors duration-700" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center text-primary">
                <Layers size={22} />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text-muted mb-1 uppercase tracking-wider">Total Datasets</h3>
              <div className="text-5xl font-semibold tracking-tight text-text-base flex items-baseline gap-2">
                {datasets?.length || 0}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metric 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full blur-2xl group-hover:bg-secondary/20 transition-colors duration-700" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center text-secondary">
                <Activity size={22} />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text-muted mb-1 uppercase tracking-wider">Rows Imported</h3>
              <div className="text-5xl font-semibold tracking-tight text-text-base flex items-baseline gap-2">
                {totalRows.toLocaleString()}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metric 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full blur-2xl group-hover:bg-teal-500/20 transition-colors duration-700" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center text-teal-500">
                <HardDrive size={22} />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-text-muted mb-1 uppercase tracking-wider">Storage Used</h3>
              <div className="text-5xl font-semibold tracking-tight text-text-base flex items-baseline gap-2">
                {totalStorage} <span className="text-2xl text-text-muted font-medium">MB</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Datasets Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <h2 className="text-2xl font-semibold text-text-base mb-8 tracking-tight">Your Datasets</h2>
        
        {datasets?.length === 0 ? (
          <div className="glass-card p-16 text-center flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-black/[0.02] border border-black/[0.04] flex items-center justify-center mb-6">
              <FileSpreadsheet className="w-10 h-10 text-text-muted/50" />
            </div>
            <h3 className="text-2xl font-semibold text-text-base mb-3">No datasets found</h3>
            <p className="text-text-muted mb-8 max-w-sm font-light">Upload your first CSV or Excel file to begin asking questions and generating charts.</p>
            <button 
              onClick={() => navigate('/upload')}
              className="bg-black text-white hover:bg-black/80 px-8 py-3.5 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Upload Dataset
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {datasets?.map((dataset, index) => (
              <motion.div 
                key={dataset.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.1) }}
                onClick={() => handleSelectDataset(dataset)}
                className="glass-card p-8 cursor-pointer hover:border-black/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-primary/5 text-primary rounded-[20px] group-hover:scale-110 transition-transform duration-500 ease-out">
                    <FileSpreadsheet size={28} strokeWidth={1.5} />
                  </div>
                  <button 
                    onClick={(e) => handleDelete(dataset.id, e)}
                    disabled={deletingId === dataset.id}
                    className="p-2.5 text-text-muted hover:text-red-500 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                  >
                    {deletingId === dataset.id ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
                  </button>
                </div>
                
                <h3 className="text-xl font-semibold text-text-base truncate mb-3" title={dataset.originalName}>
                  {dataset.originalName}
                </h3>
                
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 bg-green-50 text-green-700 w-fit rounded-full mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  {dataset.status}
                </div>

                <div className="space-y-3 text-sm text-text-muted font-medium flex-1">
                  <div className="flex items-center justify-between py-2 border-b border-black/[0.03]">
                    <span className="flex items-center gap-2"><Database size={15} /> Rows</span>
                    <span className="text-text-base">{dataset.rowCount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-black/[0.03]">
                    <span className="flex items-center gap-2"><HardDrive size={15} /> Size</span>
                    <span className="text-text-base">{(dataset.sizeBytes / 1024).toFixed(1)} KB</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="flex items-center gap-2"><Calendar size={15} /> Uploaded</span>
                    <span className="text-text-base">{format(new Date(dataset.createdAt), 'MMM d, yyyy')}</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-5 flex justify-between items-center text-primary group-hover:text-primary-hover font-semibold transition-colors">
                  <span>Analyze with AI</span>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Play size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Dashboard;
