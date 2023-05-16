import React from 'react';
import { DownOutlined, SmileOutlined,UserOutlined,NotificationTwoTone } from '@ant-design/icons';
import { Avatar, Col, Input, MenuProps, Row } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';


function Header({

}) {


  const items = [
    {
      key: '1',
      label: (
        <Link to="/profile" onClick={()=>{}} >
          Thông tin tài khoản
        </Link>
      ),
      icon: <SmileOutlined />
    },
   
    {
      key: '3',
      danger: true,
      label: (
        <Link to="/login" onClick={()=>{sessionStorage.removeItem('user')}} >
        Thoát
      </Link>
      ),
      icon: <SmileOutlined />
    },
   
  ];
  return (
    <Row>
    <Col span={7} push={6}>
      <div style={{marginTop:'10px'}}>
      <Input.Search size="large" placeholder="input here" enterButton />
      </div>
    
    </Col>
    <Col span={1} push={13}> 
      <Dropdown menu={{ items }}  placement="bottomRight" arrow={{ pointAtCenter: true }}>
    <NotificationTwoTone />
    </Dropdown></Col>
    <Col span={1} push={14}>
    <Dropdown menu={{ items }}  placement="bottomRight" arrow={{ pointAtCenter: true }}>
    <Avatar
        style={{
          backgroundColor: 'blueviolet',
          verticalAlign: 'middle',
        }}
        size="large"
        gap={'S'}
      >
        {'Seller'}
      </Avatar>
    </Dropdown>
    </Col>
    
    </Row>
  );
}

export default Header;