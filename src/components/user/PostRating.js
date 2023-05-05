import { Button, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import BaseUrl from '../../util/BaseUrl';
import { toast } from 'react-toastify';

function PostRating(props) {
    const [star,setStar]=useState(5);
    const [comment,setComment]=useState("");
    const idAccount=sessionStorage.getItem('user');
    const idTour=props.idTour;
    
    const guiDanhGia=async()=>{
        if(comment){
        let rate={comment,star,idAccount,idTour}
        console.log(rate)
        try{
            const res= await axios.post(BaseUrl+'rating',rate);
            props.post();
            setComment("");
            setStar(5)
        }catch(err){alert('Khong co ket noi');} 
    }
    else toast.warning("Vui lòng nhập nội dung");

    }
  return (
   <>
   <h2 className="text-maintext m-2 font-[700] text-lg uppercase">
          Bình luận:
        </h2>
        <div className="flex flex-col">
          <div className="mx-7 my-1">
            <Rate defaultValue={5} value={star} onChange={(value)=>{setStar(value)}}/>
          </div>
          <div className="">
          <TextArea rows={4} 
          value={comment}
          onChange={(e)=>{setComment(e.target.value)}}
          style={{
            width: 500,
            marginLeft:30
          }}
           placeholder="Nhập nội dung đánh giá" />
           <Button onClick={guiDanhGia}>Gửi đánh giá</Button>
          </div>
        </div>
   </>
  )
}

export default PostRating