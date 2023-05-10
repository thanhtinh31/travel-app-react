import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Headers from "../components/seller/Header";
import {CommentOutlined,BarChartOutlined ,CalendarOutlined,ContainerOutlined,RiseOutlined,AreaChartOutlined,SettingOutlined,SafetyCertificateOutlined,FormOutlined} from '@ant-design/icons';
import { Badge, Breadcrumb, Button, Layout, Menu, notification, theme } from 'antd';
import { collection, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import axios from "axios";
import BaseUrl from "../util/BaseUrl";
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
  const [open,setOpen]=useState(false);
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
    getItem(<Link to={"listtour"} onClick={()=>{setPath("listtour");}}>Quản lý Tour du lịch</Link>, 'listtour', <ContainerOutlined />),

    getItem(<Link to={"schedule"} onClick={()=>{setPath("schedule");}}>Quản lý lịch trình</Link>, 'schedule', <CalendarOutlined />,
    [getItem(<Link to={"schedule"} onClick={()=>{setPath("schedule");}}>Lịch trình tour</Link>, 'schedule', <SettingOutlined />),
    getItem(<Link to={"chottour"} onClick={()=>{setPath("chottour");}}>Chốt tour</Link>, 'chottour', <SafetyCertificateOutlined />)])
    ,
    getItem(<Link  to={"chatbox"} onClick={()=>{setPath("chatbox");}}>Chat box (CSKH)</Link>, 'chatbox', <CommentOutlined />),
    getItem(<Badge count={count}><Link style={{color:"HighlightText"}} to={"listinvoice"} onClick={()=>{xem();setPath("listinvoice");}}>Quản lý hóa đơn</Link></Badge>, 'listinvoice', <FormOutlined />),
    getItem(<Link to={"schedule"} onClick={()=>{setPath("thongke");}}>Thống kê</Link>, 'thongke', <BarChartOutlined />,
    [getItem(<Link to={"schedule"} onClick={()=>{setPath("thongkedoannhthu");}}>Thống kê doanh thu</Link>, 'thongkedoannhthu', <RiseOutlined />),
    getItem(<Link to={"chottour"} onClick={()=>{setPath("chottour");}}>Thống kê tour</Link>, 'chottour', <AreaChartOutlined />)])
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

  const check= async()=>{
    const id  = sessionStorage.getItem('user');
   try{
     const user= await axios.get(BaseUrl+'account/getAccount/'+id);
    if(!user.data){
      navigate('/login');
   }
   else if(user?.data.typeAccount<2||user?.data.status==false)
     {
     navigate("/authorized");
     }
     else{
      setOpen(true)
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
  }
  catch{
    navigate("/authorized");

  }
  }
useEffect(()=>{
 check();
})
const [collapsed, setCollapsed] = useState(false);  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
    {open?
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
            fontSize:25,
            color:'green'
          //  background: 'rgba(255, 255, 255, 0.2)',
          }}
        > Travel-app</div>
        
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
            minHeight:'550px'
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
    </Layout>:<></>}
    </>
  );
}

export default SellerLayout