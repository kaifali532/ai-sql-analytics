import { create } from 'zustand';

export interface Dataset {
  id: string;
  originalName: string;
  tableName: string;
  status: string;
  rowCount: number;
  sizeBytes: number;
  createdAt: string;
  columns?: any[];
}

interface DatasetState {
  currentDataset: Dataset | null;
  setCurrentDataset: (dataset: Dataset | null) => void;
}

export const useDatasetStore = create<DatasetState>((set) => ({
  currentDataset: null,
  setCurrentDataset: (dataset) => set({ currentDataset: dataset }),
}));
