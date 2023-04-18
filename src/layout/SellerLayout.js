import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Headers from "../components/seller/Header";
import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Breadcrumb, Button, Layout, Menu, notification, theme } from 'antd';
import { collection, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
const { Header, Content, Footer, Sider } = Layout;
const key = 'updatable';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}
const SellerLayout = ({title = "Title", className, children}) => {
  const [count,setCount]=useState(0);
  const  navigate = useNavigate()
  const [path,setPath] = useState("listtour");
  const xem= async()=>{
    const qer = query(
      collection(db, 'notification'),
      where("status","==",0)
    );
    const q=await getDocs(qer)
    q.forEach((doc) => {updateDoc(doc.ref,{status:1})})

  }
  const items = [
    getItem(<Link to={"listtour"} onClick={()=>{setPath("listtour");}}>Quản lý Tour du lịch</Link>, 'listtour', <PieChartOutlined />),
    getItem(<Link to={"schedule"} onClick={()=>{setPath("schedule");}}>Quản lý Lich trinh</Link>, 'schedule', <UserOutlined />),
    getItem(<Link  to={"chatbox"} onClick={()=>{setPath("chatbox");}}>Chat box</Link>, 'chatbox', <PieChartOutlined />),
    getItem(<Badge count={count}><Link style={{color:"HighlightText"}} to={"listinvoice"} onClick={()=>{xem();setPath("listinvoice");}}>Quan ly hoa don</Link></Badge>, 'listinvoice', <PieChartOutlined />),
    getItem('Team', 'sub2', <UserOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type,content) => {
    api['success']({
      message: 'Thông báo mới',
      description:
        content,
      key
    });
  };
useEffect(()=>{
  const account  = sessionStorage.getItem('user');
  if(!account){
     navigate('/login');
  }
  else if(JSON.parse(account).typeAccount<2)
    navigate("/authorized");
    else{
      onSnapshot(
        query(
            collection(db, 'notification'),
            where("status","==",0)
        ),
        (querySnapshot) => {
          var c=0;
          querySnapshot.docs.map((doc) => {c++;       
          });   
          setCount(c);
      }
    );
    }
})
const [collapsed, setCollapsed] = useState(false);  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      {contextHolder}
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