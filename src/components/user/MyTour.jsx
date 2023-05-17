import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Destination1 from "../../assets/bg1.jpg";
import Destination2 from "../../assets/bg1.jpg";
import { ArrowDownOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Card, Col, Descriptions, Empty, Progress, Rate, Row, Space, Spin, Statistic } from "antd";
import axios from "axios";
import BaseUrl from "../../util/BaseUrl";
import { useNavigate } from "react-router-dom";

export default function MyTour() {
  const [loading,setLoading]=useState(true);

  const packages = [
    "Tour chưa xuất phát",
    "Tour đang khởi hành",
    "Tour đã hoàn thành",
    "Tour đã hủy",
  ];

  const [active, setActive] = useState(1);
  const [data,setData] =useState([]);
  const navigate=useNavigate();
  const getListMyTour= async ()=>{
    if(sessionStorage.getItem('user')){
      try{
      const mytour= await axios.get(BaseUrl+'invoice/mytour/'+sessionStorage.getItem('user'));
      setData(mytour?.data)
      setLoading(false)
      }catch{
        alert('Lỗi kết nối')
      }
    }else{
        navigate('/login')
    }
  }
  useEffect(() => {
    getListMyTour();
     
  }, []);
  return (
    <>
    <Spin spinning={loading}>
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.length==0?<Empty />:<></>}
        {data.map((item) => {
          let dayStart=new Date(item.dayStart);
          if(item.progress==active)
          return (
            <div className="destination">
              {active}
              <Row >
                <Col span={12}>
              <img src={item.image.url} alt="" />
              <h3>TOUR:{item.title}| {item.subTitle}</h3>
              <h3>Thời gian:{item.inteval}</h3>
              <h3>Địa chỉ:{item.address}</h3>
              
             
              <div className="distance">
                <Rate disabled defaultValue={item.star} />
                <span style={{marginLeft:'270px'}}>{item.price} VNĐ</span>
              </div>
              </Col>
              <Col span={12}>
              <Row gutter={2}>
                  <Col span={7}><Space>{item.status==0?"Chờ xn":item.status==1?"Chưa thanh toán":""}</Space>
                  <Progress type="circle" status={item.status==3?"exception":"active"} percent={100-item.countDay} format={(percent) =>percent<100?item.status==3?"Hủy":`${100-percent} Days`:"done"} /></Col>
                  <Col ><Space>
                  <Badge.Ribbon text={item.status==2?"Đã thanh toán":item.status==3?"Đã hủy":"Chưa thanh toán"} color={item.status==2?"green":item.status==3?"red":"yellow"}>
                    <Card bordered={false}>
                  <Statistic
                  title="Số lượng người"
                  value={item.people}
                  precision={0}
                  valueStyle={{
                  color: '#3f8600',
                  }}
                  prefix={<UserOutlined />}
                  suffix="Người"
                />
                    </Card>
                  </Badge.Ribbon>
                    </Space></Col>
                  <Col  push={2}>
                    
                  <Card bordered={false}>
                <Statistic
                  title="Số người dự kiến"
                  value={item.expectedPeople}
                  precision={0}
                  valueStyle={{
                  color: '#3f8600',
                  }}
                  prefix={<UserOutlined />}
                  suffix="Người"
                />
                 </Card>
                  </Col>
                </Row>
                {/* <Row>
                  <Col>Điểm xuất phát: </Col>
                  <Col>{item.addressStart}</Col>
                </Row>
                <Row>
                  <Col>Ngày xuất phát </Col>
                  <Col>{item.dayStart} </Col>
                </Row> */}
                <Row>
                <Descriptions column={2} title="Thông tin chuyến đi">
    <Descriptions.Item label="Điểm xuất phát">{item.addressStart}</Descriptions.Item>
    <Descriptions.Item label="Điểm đến">{item.address}</Descriptions.Item>
    <Descriptions.Item label="Ngày xuất phát">{dayStart.getDate()}/{dayStart.getMonth()+1}/{dayStart.getFullYear()}</Descriptions.Item>
    <Descriptions.Item label="Phương tiện di chuyển">{item.vehicle}</Descriptions.Item>
    <Descriptions.Item label="Hướng dẫn viên">{item.tourGuide}</Descriptions.Item>
    <Descriptions.Item label="Số điện thoại ">{item.phone}</Descriptions.Item>
  </Descriptions>
                </Row>
                <Row>
                <Descriptions column={2} title="Thông tin hóa đơn">
    <Descriptions.Item label="Trạng thái">{item.status==2?"Đã thanh toán":item.status==3?"Đã hủy":"Chưa thanh toán"}</Descriptions.Item>
    <Descriptions.Item label="Hình thúc thanh toán">{item.payments?item.payments:"--"}</Descriptions.Item>
    <Descriptions.Item label="Tổng tiền thanh toán">{item.amount}</Descriptions.Item>
    <Descriptions.Item label="Ngày thanh toán">{item.payDay?item.payDay:"--"}</Descriptions.Item>
    
  </Descriptions>
                </Row>
              </Col>
              </Row>
            </div>
          );
          else return(<></>);
        })}
      </div>
    </Section>
    </Spin>
    </>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 90%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
