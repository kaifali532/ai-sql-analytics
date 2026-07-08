import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../lib/api';
import { useDatasetStore, type Dataset } from '../store/useDatasetStore';
import { useNavigate } from 'react-router-dom';
import { Database, FileSpreadsheet, Trash2, Calendar, HardDrive, Loader2, Play } from 'lucide-react';
import { format } from 'date-fns';

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
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and analyze your datasets.</p>
        </div>
        <button 
          onClick={() => navigate('/upload')}
          className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
        >
          <Database size={18} />
          New Dataset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Datasets</h3>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{datasets?.length || 0}</p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Rows Imported</h3>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            {(datasets?.reduce((acc, curr) => acc + curr.rowCount, 0) || 0).toLocaleString()}
          </p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Storage Used</h3>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            {((datasets?.reduce((acc, curr) => acc + curr.sizeBytes, 0) || 0) / (1024 * 1024)).toFixed(2)} MB
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Your Datasets</h2>
      
      {datasets?.length === 0 ? (
        <div className="glass-card p-12 text-center flex flex-col items-center border-dashed">
          <FileSpreadsheet className="w-16 h-16 text-slate-300 dark:text-slate-600 mb-4" />
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No datasets found</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-6">Upload your first CSV or Excel file to get started.</p>
          <button 
            onClick={() => navigate('/upload')}
            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-5 py-2.5 rounded-xl font-medium transition-colors"
          >
            Upload Dataset
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datasets?.map((dataset) => (
            <div 
              key={dataset.id} 
              onClick={() => handleSelectDataset(dataset)}
              className="glass-card p-6 cursor-pointer hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <FileSpreadsheet size={24} />
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => handleDelete(dataset.id, e)}
                    disabled={deletingId === dataset.id}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    {deletingId === dataset.id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate mb-1" title={dataset.originalName}>
                {dataset.originalName}
              </h3>
              
              <div className="flex items-center gap-1.5 text-xs font-medium px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 w-fit rounded-md mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                {dataset.status}
              </div>

              <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><Database size={14} /> Rows</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{dataset.rowCount.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><HardDrive size={14} /> Size</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{(dataset.sizeBytes / 1024).toFixed(1)} KB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> Uploaded</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{format(new Date(dataset.createdAt), 'MMM d, yyyy')}</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-primary group-hover:text-primary font-medium text-sm">
                <span>Analyze with AI</span>
                <Play size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
