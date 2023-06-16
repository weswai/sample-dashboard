'use client'
import { Layout } from 'antd';
import { ReactNode } from 'react';

const { Content } = Layout;

interface ContentProps {
  children: ReactNode;
}

const  MainContent = ({ children }: ContentProps)=> (
    <Content className="m-6 bg-white shadow-md ">
      {children}
    </Content>
  );
  
  export default MainContent;