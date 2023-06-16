'use client'
import { useEffect, useState } from 'react';
import { useStore } from '../commons/store';
import DataTable from "../components/Table";
import Filter from "../components/Filter";
import PageControls from "../components/Pagination";


  const apiUrl = "https://api.npoint.io/299f74f074454c62fe63"

  const Page = () => {
    const [columns] = useState([
      { title: 'ID', dataIndex: 'id', key: 'id' },
      { title: 'User ID', dataIndex: 'userId', key: 'userId' },
      { title: 'Title', dataIndex: 'title', key: 'title' },
      { title: 'Body', dataIndex: 'body', key: 'body' },
    ]);
    const { data, fetchData } = useStore();
  
    useEffect(() => {
      const fetchDataFromApi = async () => {
        await fetchData(apiUrl, {});
      };
  
      fetchDataFromApi();
    }, []);
  
    return (
      <div>
        <div className='p-6'>
          <Filter apiUrl={apiUrl} />
        </div>
        <div className='w-full h-12 bg-neutral-100	'></div>
        <div className='p-6'>
          <DataTable columns={columns} />
        </div>
      </div>
    );
  };
  
  export default Page;