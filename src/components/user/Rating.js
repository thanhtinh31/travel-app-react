import { Rate } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import BaseUrl from '../../util/BaseUrl';
import { useEffect } from 'react';

function Rating(props) {
  const [image,setImage]=useState("https://xsgames.co/randomusers/avatar.php?g=pixel&key=1");
  const [name,setName]=useState("");
  const [comment,setComment]=useState(props.comment);
  const [star,setStar]=useState(props.star);
  async function fetchApi() {
    try{
        const res= await axios.get(BaseUrl+'account/getAccount/'+props.idAccount);
        if(res?.data.image)setImage(res?.data.image);
        setName(res?.data.nameAccount)
    }catch(err){alert('Khong co ket noi');}        
}
  useEffect(() => {
    fetchApi()
    }, []);

  return (
    <div className="flex mx-2 items-center my-2">
            <img
              src={image}
              className="w-10 h-10 rounded-full"
            />
            <div className="mx-2 text-sm p-2 bg-gray-200 rounded-md shadow-md relative cmm flex flex-col">
              <span className="font-[500]">{name}</span>
              <div className="flex flex-col mx-5">
                <Rate disabled defaultValue={star} className="text-sm" />
                <pre>{comment}
                </pre>
              </div>
            </div>
    </div>
  )
}

export default Rating