import { create }  from 'zustand';

type RecordData = {
    id: number;
    body: string;
    title: string;
    userId: number;
  };
  
  type Store = {
    filterParams: Record<string, any>;
    data: {
        records: RecordData[];
        total: number;
      };
    setFilterParams: (params: Record<string, any>) => void;
    fetchData: (apiUrl: string, params: Record<string, any>) => Promise<void>;
  };
  
  export const useStore = create<Store>((set) => ({
    filterParams: {},
    data: {
        records: [],
        total: 0,
      },
    setFilterParams: (params) => set({ filterParams: params }),
    fetchData: async (apiUrl, params) => {
      try {
        const response = await fetch(`${apiUrl}?${new URLSearchParams(params)}`);
        const result = await response.json();
        const data = result.data
        console.log('data: ', data)
  
        set({ data });
      } catch (error) {
        console.error(error);
      }
    },
  }));