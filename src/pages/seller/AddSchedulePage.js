import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import DatePicker from 'react-day-select'
import "react-datepicker/dist/react-datepicker.css";
import LazyLoad from 'react-lazyload';
import axios from 'axios';
import BaseUrl from '../../util/BaseUrl';
const Loading = () => (
  <div className="post loading">
    <h5>Loading...</h5>
  </div>
)

const Post = ({ id, title, image }) => (
  <div className="post">
    <div className="post-body">
      <h4>{title}</h4>
      <LazyLoad once={true} placeholder={<img src={image[1]}></img>}>
      <img src={image[0]}></img>
      </LazyLoad>
      
    </div>
  </div>
)

function AddSchedulePage() {
    const [startDate, setStartDate] = useState(new Date());
    const [data,setData] =useState([]);
    useState(async() => {
      const res = await axios.get(BaseUrl + "tour?size=100");
      setData(res?.data.content);
    }, []);
    return (
      // <ReactDatePicker 
      // selected={startDate} 
      // onChange={(date) =>{ 
      // setStartDate(date); console.log(date);}} 
      // dateFormat='dd/MM/yyyy'/>
      <>
      <h2>LazyLoad Demo</h2>
    <div className="post-container">
      {data.map(post => (
        <LazyLoad key={post.id}
        height={100}
        offset={[-100,100]}
         placeholder={<Loading />}>
          <Post key={post.id} {...post} />
          <Post key={post.id} {...post} />
          <Post key={post.id} {...post} />
          <Post key={post.id} {...post} />
          <Post key={post.id} {...post} />
        </LazyLoad>
      ))}
    </div>
      </>
    );
}

export default AddSchedulePage