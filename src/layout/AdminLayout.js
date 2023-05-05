import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, message, theme } from 'antd';

import HeaderAdmin from "../components/admin/HeaderAdmin";
import axios from "axios";
import BaseUrl from "../util/BaseUrl";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}
const AdminLayout = ({title = "Title", className, children}) => {
  const [open,setOpen]=useState(false)
  const  navigate = useNavigate()
  const [path,setPath] = useState("listcategory");
  const items = [
    getItem(<Link to={"listcategory"} onClick={()=>{setPath("listcategory");}}>Quản lý Danh mục</Link>, 'listcategory', <PieChartOutlined />),
    getItem(<Link to={"listaccount"} onClick={()=>{setPath("listaccount");}}>Quản lý tài khoản</Link>, 'listaccount', <UserOutlined />),
    getItem('Thống kê', 'sub1', <PieChartOutlined />, [
      getItem(<Link to={"thongketour"} onClick={()=>{setPath("thongketour");}}>Thống kê tour</Link>, 'thongketour', <PieChartOutlined />),
      getItem(<Link to={"thongketaikhoan"} onClick={()=>{setPath("thongketaikhoan");}}>Thống kê tài khoản</Link>, 'thongketaikhoan', <PieChartOutlined />),
      getItem(<Link to={"thongkedoanhthu"} onClick={()=>{setPath("thongkedoanhthu");}}>Thống kê doanh thu</Link>, 'thongkedoanhthu', <PieChartOutlined />),
    ]),
    getItem('Team', 'sub2', <UserOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];

  const check= async()=>{
    const id  = sessionStorage.getItem('user');
   try{
     const user= await axios.get(BaseUrl+'account/getAccount/'+id);
    if(!user.data){
      navigate('/login');
   }
   else if(user?.data.typeAccount<3)
     {console.log(user?.data.typeAccount)
     navigate("/authorized");
     }
     else{
      console.log(user?.data.typeAccount)
     }
  }
  catch{
    navigate("/authorized");

  }
  }
useEffect( ()=>{
  check();
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
          <HeaderAdmin></HeaderAdmin>
          {/* <Headers></Headers> */}
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
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
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

export default AdminLayout