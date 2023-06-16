'use client'
import { Pagination, Select } from 'antd';
import { useStore } from '../commons/store';

const { Option } = Select;

const PageControls = ({ apiUrl }: { apiUrl: string }) => {
    const { filterParams, data, setFilterParams, fetchData } = useStore();

  const handlePageChange = (newPage: number) => {
    setFilterParams({ ...filterParams, page: newPage });
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setFilterParams({ ...filterParams, page: 1, limit: newItemsPerPage });
  };



  return (
    <div>
      
      <Pagination
        current={filterParams.page}
        total={data.total}
        onChange={handlePageChange}
        onShowSizeChange={handleItemsPerPageChange}
        showSizeChanger
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      />
    </div>
  );
};

export default PageControls;