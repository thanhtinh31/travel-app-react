import {
    AppstoreOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    UnorderedListOutlined,
    DesktopOutlined,
    OrderedListOutlined,
    MenuUnfoldOutlined,
  } from "@ant-design/icons";
  import { Badge, Button, Col, Input, Menu, Rate, Row, Select, Skeleton, Space, Spin, Tag } from "antd";

  import axios from "axios";
  import { useEffect, useState } from "react";
 
  import { BsBusFront, BsCardChecklist, BsFillCarFrontFill, BsShieldFillCheck, BsTicketPerforatedFill } from "react-icons/bs";

  import { MdAirplanemodeActive, MdArrowDownward, MdArrowUpward, MdCheckCircle, MdLocationPin, MdOutlineRequestPage, MdOutlineStar, MdTrain } from "react-icons/md";
  import { TbBeach, TbMountain } from "react-icons/tb";
  import BaseUrl from "../../util/BaseUrl";
  import { FaUtensils } from "react-icons/fa";
  import { Link, useNavigate } from "react-router-dom";
  import LazyLoad from "react-lazyload";
  const { Option } = Select;

  const Tour = ({ id, title, image,address ,price,inteval,sale }) => (
    <Badge.Ribbon placement="start" text={sale!=0?"Sale -"+sale*100+" %":""} color="red">
    <div className="flex flex-col lg:flex-row md:h-auto bg-slate-100 shadow-md rounded-md ">
                  <div className="h-full w-full lg:w-[55%]">
                    <Link to={"/detailtour?id="+id} >
                    <LazyLoad  once={true} placeholder={<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"></img>}>
                    <img src={image[0].url} className="p-2 rounded-md h-full" loading='lazy'></img>
                    </LazyLoad> 
                    </Link>
                  </div>
                  <div className="w-full lg:w-[45%] text-maintext dark:text-darkmaintext">
                    <div className="text-base font-[600] p-1">
                      <a href="">{title}- {inteval}</a>
                    </div>
                    <div className="px-1 text-sm font-[500]">
                      {address}
                    </div>
                    {/* <div className="flex items-center px-1 text-sm font-[500]">
                      <span className="mr-2">Phương tiện: </span>
                      
                    </div> */}
                    <div className="flex text-yellow-500">
                      <Rate value={5} disabled></Rate>
                    </div>
                    <div className="flex justify-around p-1">
                      {/* <MdCheckCircle size={15} />
                      <FaUtensils size={15} />
                      <BsShieldFillCheck size={15} />
                      <BsTicketPerforatedFill size={15} />
                      <BsBusFront /> */}
                    </div>
                    <div className="text-sm font-[500] text-red-600 p-1">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(price - price * sale)}{" "}
                      / người
                    </div>
                    {sale==0?<></>:
                    <div className="line-through text-sm font-[400] text-red-500 p-1">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(price)}{" "}
                      / người
                    </div>
                    }
                    
                  </div>
    </div>
    </Badge.Ribbon>
  )
  
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };
  
  
  const Filtertour = () => {
    var url_string = window.location;
    var url = new URL(url_string);
    var k= url.searchParams.get("id");
    const [address,setAddress]=useState(null);
    const [idCategory,setIdCategory]=useState([]);
    const [gt,setGt]=useState(0);
    const [lt,setLt]=useState(1000000000);
    const [sort,setSort]=useState(1);
    const navigate =useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    const [loading,setLoading]=useState(true);
    const [listCategory,setListCategory]=useState([]);
    const items = [
      getItem(<Link onClick={()=>{setAddress(null);fetchData(null,null,gt,lt,sort)}}>Tất cả tour</Link>, "1", <UnorderedListOutlined />),
      ,getItem("Điểm đến", "sub2", <MdLocationPin/>, [
        getItem(
          <Input onPressEnter={(e)=>{fetchData(e.target.value,idCategory,gt,lt,sort);setIdCategory([])}}  value={address} onChange={(e)=>{setAddress(e.target.value);}}></Input>,
          "99"
        ),
        getItem(
          <span onClick={() => {setAddress("Da Nang");fetchData("Da Nang",null,gt,lt,sort);setIdCategory([])}}>
            Đà nẵng
          </span>,
          "9"
        ),
        getItem(
          <span onClick={() => {setAddress("Ho Chi Minh");fetchData("Ho Chi Minh",null,gt,lt,sort);setIdCategory([])}}>
            Hồ Chí Minh
          </span>,
          "10"
        ),
        getItem(
          <span onClick={() => {setAddress("Ha Noi");fetchData("Ha Noi",idCategory,gt,lt,sort);setIdCategory([])}}>
            Hà Nội
          </span>,
          "11"
        ),
      ]),
      getItem("Theo giá", "sub3", <AppstoreOutlined />, [
        getItem(<span onClick={() => {setSort(1);fetchData(address,idCategory,gt,lt,1)}}>Tăng dần</span>, "18",<MdArrowUpward/>),
        getItem(<span onClick={() => {setSort(-1);fetchData(address,idCategory,gt,lt,-1)}}>Giảm dần</span>, "98",<MdArrowDownward/>),
        getItem("Khoảng giá", "sub4", <MdOutlineRequestPage/>, [
          getItem(<span onClick={() => {fetchData(address,idCategory,gt,1000001,sort)}}>Dưới 1 triệu</span>, "14"),
          getItem(<span onClick={() => {fetchData(address,idCategory,1000000,2999999,sort)}}>Khoảng 1 - 3 triệu</span>, "15"),
          getItem(<span onClick={() => {fetchData(address,idCategory,3000000,5000001,sort)}}>Khoảng 3 - 5 triệu</span>, "16"),
          getItem(<span onClick={() => {fetchData(address,idCategory,5000000,lt,sort)}}>{"Khoảng > 5 triệu"}</span>, "17"),
        ]),
      ]),
      getItem(<Link>Theo Danh Mục</Link>, "55", <UnorderedListOutlined />),
    ];

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    const [tour, setTour] = useState([]);
    async function fetchData(address,idCategory,gt,lt,sort) {
      setLoading(true)
      try {
        const filterobj={address:address===""?null:address,idCategory:idCategory?idCategory.length==0?null:idCategory:null,gt,lt,sort};
        console.log(filterobj)
        const tours = await axios.post(BaseUrl + "tour/filter",filterobj);
        setTour(tours.data);
        console.log(tours.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error(error);
      }
    }
    async function getCategories() {
      setLoading(true)
      try {
        const cate = await axios.get(BaseUrl + "category/active");
        setListCategory(cate?.data);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error(error);
      }
    }
    const handleChangeCate = (value) => {
      fetchData(null,value,gt,lt,sort);
      setIdCategory(value)
      setAddress(null)
  };

  
    useEffect(() => {
      if(k) setIdCategory([k]);
      fetchData(address,k==null?null:[k],gt,lt,sort);
      getCategories()
    }, []);
    const detailClick=(e)=>{
     navigate('/detailtour?id='+e);
    }
  
    return (
      <div className="flex mt-24">
        <div className="absolute md:relative" style={{ width: 256 }}>
          <div>
            <h2 className="flex items-center mb-3 text-md uppercase font-[600] text-maintext">
              <Button
                className="flex items-center md:hidden mr-2"
                type="primary"
                onClick={toggleCollapsed}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
              Bộ lọc tìm kiếm
            </h2>
          </div>
          <Menu
            className="hidden md:block"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1","sub2","sub3"]}
            mode="inline"
            theme="light"
              inlineCollapsed={collapsed}
            items={items}
          />
          {collapsed ? (
            <Menu
              className="menudr block md:hidden"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1","sub2","sub3"]}
              mode="inline"
              theme="light"
                 inlineCollapsed={collapsed}
              items={items}
            />
          ) : (
            <></>
          )}

          <><Select 
            mode="multiple"
            style={{
            width: '100%',
            }}
            placeholder="select Category"
            value={idCategory}
            onChange={handleChangeCate}
            >
            {listCategory.map((item) => {
            return (
              <Option value={item.id} key={item.id} >
              <Space>
              {item.name}
              </Space>
              </Option>
            )})}
            </Select></>

        </div>
        <div className="w-full  mt-10 ml-3 " style={{marginBottom:'50px'}}>
        <h2 className="text-sm md:text-base font-[500] text-maintext"> 
          <Row>
            <Col>{address==null||address===""?idCategory==null||idCategory.length==0?"Tất cả các tour...":"Lọc tour theo danh mục":"Lọc tour theo địa chỉ: "+address} </Col>
            <Col push={16}>{sort==1?"Sắp xếp tăng dần":"Sắp xếp giảm dần"}</Col>
          </Row>
           {}
          </h2>
          <Spin spinning={loading}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" navi>
          {tour.map(item => (
       <LazyLoad key={item.id}
       height={100}
       offset={[-100,100]}
       placeholder={<Skeleton/>}>
         <Tour key={item.id} {...item} />
       </LazyLoad>
          ))}
         
          </div>
          </Spin>
        </div>
  
      </div>
    );
  };
  export default Filtertour;