import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Headers from "../components/seller/Header";
import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}
const SellerLayout = ({title = "Title", className, children}) => {
  const  navigate = useNavigate()
  const [path,setPath] = useState("listtour");
  const items = [
    getItem(<Link to={"listtour"} onClick={()=>{setPath("listtour");}}>Quản lý Tour du lịch</Link>, 'listtour', <PieChartOutlined />),
    getItem(<Link to={"schedule"} onClick={()=>{setPath("schedule");}}>Quản lý Lich trinh</Link>, 'schedule', <UserOutlined />),
    getItem('Thống kê', 'sub1', <PieChartOutlined />, [
      getItem('Thống kê theo ngày', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <UserOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
useEffect(()=>{
  const account  = sessionStorage.getItem('user');
  if(!account){
     navigate('/login');
  }
  else if(JSON.parse(account).typeAccount<2)
    navigate("/authorized");
})
const [collapsed, setCollapsed] = useState(false);  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
  
        <div
          style={{
            height: 32,
            margin: 16,
          //  background: 'rgba(255, 255, 255, 0.2)',
          }}
        > ADmin</div>
        
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['listtour']}
          items={items}
          selectedKeys={path}
        />
      </Sider>
      <Layout>
        <Header 
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Headers></Headers>
        </Header>
       
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Seller</Breadcrumb.Item>
            <Breadcrumb.Item>{path}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default SellerLayout