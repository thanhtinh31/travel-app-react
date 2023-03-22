import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import UserLayout from '../../layout/UserLayout'
import BaseUrl from '../../util/BaseUrl';

function DetailTourPage() {
    var url_string = window.location;
    var urla = new URL(url_string);
    var id = urla.searchParams.get("id");
    const [tour,setTour] =useState({});
    const [listSchedule,setListSchedule]=useState([]);
    const [images,setImages] =useState([]);
    const [idSchedule,setIdSchedule] = useState("0");
    const [schedule,setSchedule] = useState({});
    const [people,setPeople] =useState(1);
    const handleBooking = async(e)=>{
        e.preventDefault();
        const account  = sessionStorage.getItem('user');
        if(!account){
            alert("vui long dang nhap de dat tour")
            window.location='/login';
        }
        else{
            console.log(idSchedule);
            if(idSchedule=="0") toast.warning("Vui long chon ngay khoi hanh");
            else
            window.location='/booking?idSchedule='+idSchedule+'&sl='+people;
        }
    }
    async function getTourById() {
        try{
            const res= await axios.get(BaseUrl+'tour/'+id);
            setTour(res?.data);   
            setImages(res?.data.image);
            console.log(res?.data);
        }catch(err){alert('Khong co ket noi');}        
    }
    async function getScheduleByIdTour() {
        try{
            
            const res= await axios.get(BaseUrl+'schedule/active/'+id); 
            setListSchedule(res?.data);  
            console.log(res?.data);
        }catch(err){alert('Khong co ket noi');}        
    }

    useEffect(() => {
        getTourById();
        getScheduleByIdTour();
      }, []);
    
  return (
    <UserLayout>
      <div>
        title-{tour.title} <br/>
        image-{images.map((img)=>{return(<img src={img}></img>)})}<br/>
        price-{tour.price}<br/>
        sale-{tour.sale}<br/>
        address-{tour.address}<br/>
      </div>
      <div>
        <form>
        <select  className="form-control"
        value={idSchedule}
        onChange={(e) => {setIdSchedule(e.target.value)}}>
            
            <option value="0">Chọn ngày xuất phát</option>
        { listSchedule.map((item) => { 
          return(
        <option value={item.id} >{item.dayStart} -- {item.tourGuide}</option> 
          )})
        }
        </select>

        <br/>Số lượng người
        <input
        type={Number}
        value={people}
        onChange={(e)=>{setPeople(e.target.value)}}>
        </input>
        <button onClick={handleBooking}>Đặt tour</button>
        </form>
      </div>
    </UserLayout>
  )
}

export default DetailTourPage