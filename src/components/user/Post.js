import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Post(props) {
    const [title,setTitle] =useState("")
    const [image,setImage] =useState("")
    const [link,setLink] =useState("");
    // const [title,setTitle] =useState("");
    // const [image,setImage]=useState("");
    useEffect(() => {
      
       setTitle(props.title)
       setImage(props.image)
       setLink(props.link)
      }, []);
  return (<>
    {title?<Link target="_blank" to={link}>
    <div className="relative w-72 h-48 text-maintext cursor-pointer rounded-md border-[1px] border-gray-500">
    <img src={image} className="w-full h-full rounded-md"/>
    <div className="absolute z-10 bottom-0 text-sm bg-[rgba(255,255,255,0.41)] font-[500] p-2">
    {title}
    </div>
    </div>
  </Link>:<></>}</>
  )
}

export default Post;
