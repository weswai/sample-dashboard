'use client'

import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { useStore } from '../commons/store';
import 'tailwindcss/tailwind.css';

const { Option } = Select;
const { Item: FormItem } = Form;

const Filter: React.FC<{ apiUrl: string }> = ({ apiUrl }) => {
    const { filterParams, setFilterParams, fetchData } = useStore();

    const handleInputChange = (key: string, value: string) => {
      setFilterParams({ ...filterParams, [key]: value });
    };
  
    const handleSearch = () => {
      fetchData(apiUrl, filterParams);
    };
  
    const handleReset = () => {
      setFilterParams({});
    };
  
    return (
        <Form layout="inline" className='w-full'>
      <div className="flex items-center w-full">
        <FormItem label="Title">
        <Input
        placeholder="Title"
        value={filterParams.title || ''}
        onChange={(e) => handleInputChange('title', e.target.value)}
      />
        </FormItem>
        <FormItem label="User ID">
        <Select
        placeholder="User ID"
        value={filterParams.userId || undefined}
        onChange={(value) => handleInputChange('userId', value)}
      >
        <Option value={1}>User 1</Option>
        <Option value={2}>User 2</Option>
        <Option value={3}>User 3</Option>
      </Select>
        </FormItem>
        <div className="ml-auto">
          <Button type="default" onClick={handleSearch} className='mr-2'>
            Search
          </Button>
          <Button onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    </Form>
    );
  };
  
  export default Filter;