import React from 'react';
import { DownOutlined, SmileOutlined,UserOutlined,NotificationTwoTone } from '@ant-design/icons';
import { Avatar, Col, MenuProps, Row } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'antd/es/typography/Link';
const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Thông tin tài khoản
      </a>
    ),
    icon: <SmileOutlined />
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Đổi mật khẩu
      </a>
    ),
    icon: <SmileOutlined />
  },
  {
    key: '3',
    danger: true,
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Thoát
      </a>
    ),
    icon: <SmileOutlined />
  },
 
];
function Header({
  
}) {

 
  return (
    <Row>
    <Col span={6} push={4}>
        aa
    </Col>
    <Col span={1} push={14}> 
      <Dropdown menu={{ items }}  placement="bottomRight" arrow={{ pointAtCenter: true }}>
    <NotificationTwoTone />
    </Dropdown></Col>
    <Col span={1} push={15}>
    <Dropdown menu={{ items }}  placement="bottomRight" arrow={{ pointAtCenter: true }}>
    <Avatar size={'default'} src="https://firebasestorage.googleapis.com/v0/b/test-chat-cca5c.appspot.com/o/uploads%2Fimages%2F1680800027593-tour-maldives-5-ngay-4-dem-1.jpg?alt=media&token=afd369a3-8d29-4750-a0e2-84f3f0a6e544" >
    </Avatar>
    </Dropdown>
    </Col>
    
    </Row>
  );
}

export default Header;