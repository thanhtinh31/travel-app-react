import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import X2JS from 'x2js';
import Post from './Post';

function Post24h() {
    const [posts,setPosts] =useState();
    const [ran1,setRan1]=useState( Math.floor((Math.random() * (24))))
    const [ran2,setRan2]=useState( Math.floor((Math.random() * (24))))
    const [ran3,setRan3]=useState( Math.floor((Math.random() * (24))))
    const [ran4,setRan4]=useState( Math.floor((Math.random() * (24))))
    useEffect(() => {
        
          axios
            .get("https://cdn.24h.com.vn/upload/rss/dulich24h.rss", {
              "Content-Type": "application/xml; charset=utf-8"
            })
      .then(function(response) {
       let str=(response.data.split('<![CDATA[').join(''))
       let string=str.split(']]>').join('')
        var x2js = new X2JS();
        var jsonObj = x2js.xml2js(string);
       setPosts(jsonObj.rss.channel.item)
      })
      .catch(function(error) {
          console.log(error);
      });
         
        }, []);
  return (<>
    {posts?<>
        <Post title={posts[ran1].title} image={posts[ran1].description.a.img._src} link={posts[ran1].link}/>
        <Post title={posts[ran2].title} image={posts[ran2].description.a.img._src} link={posts[ran2].link}/>
        <Post title={posts[ran3].title} image={posts[ran3].description.a.img._src} link={posts[ran3].link}/>
        <Post title={posts[ran4].title} image={posts[ran4].description.a.img._src} link={posts[ran4].link}/>
        </>:<></>}
        </>
    
  )
}

export default Post24h