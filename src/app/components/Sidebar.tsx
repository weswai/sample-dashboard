'use client'

import { useState } from 'react';
import { Menu, Layout } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

const { Sider } = Layout;
const { SubMenu } = Menu;
const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed:boolean) => {
        setCollapsed(collapsed);
      };
      return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className="bg-white shadow-md">
      <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
        );
}
export default Sidebar;