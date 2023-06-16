'use client'

import { Table } from 'antd';
import { useStore } from '../commons/store';

type Column = {
    title: string;
    dataIndex: string;
    key: string;
  };
  
  const DataTable = ({ columns }: { columns: Column[] }) => {
    const { data } = useStore();
  
    return (
      <div className='max-h-[650px] overflow-auto'>
        <Table columns={columns} dataSource={data.records}  />
      </div>
    );
  };
  
  export default DataTable;