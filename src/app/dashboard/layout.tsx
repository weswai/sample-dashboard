'use client'

import React from 'react';
import { Layout as AntLayout } from 'antd';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/Content';
import 'tailwindcss/tailwind.css';

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children } : LayoutProps) => (
  <AntLayout className='h-screen flex flex-col'>
  <Header />
  <AntLayout  className='flex-grow flex'>
    <Sidebar />
    <MainContent>{children}</MainContent>
  </AntLayout>
</AntLayout>
);

export default MainLayout;