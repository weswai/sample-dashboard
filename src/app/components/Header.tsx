'use client'
import { Button, Select } from 'antd';
import Link from 'next/link';
import { UserOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';


const Header = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);

    return(
        <div className="w-full py-2 px-6 bg-white flex justify-between items-center shadow-lg border-b">
        <div className="w-24 overflow-hidden overflow-ellipsis whitespace-nowrap ml-52">
            {time.toLocaleTimeString()}
            </div>
            <div className="flex space-x-4">
            <Select
      defaultValue="cn"
      style={{ width: 120 }}
      options={[
        { value: 'cn', label: '簡体中文' },
        { value: 'tr', label: '繁體中文' },
        { value: 'en', label: 'English' }
      ]}
    />
          <Button type="default" shape="circle" icon={<UserOutlined />} />
        </div>
    
      </div>
      );

}
  
  export default Header;
