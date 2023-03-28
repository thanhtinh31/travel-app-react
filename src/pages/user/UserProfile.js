import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CardProfile from "../../components/user/CardProfile";
import CardSettings from "../../components/user/CardSettings";

// react-bootstrap components

import UserLayout from "../../layout/UserLayout";




function User() { 
  const [account,setAccount] =useState({});
  useEffect(()=>{
    const account1  = sessionStorage.getItem('user');
    if(!account1){
       window.location='/home';
    } 
  }) 
  return (
    <UserLayout>
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4" bg-indigo-200>
          <CardSettings/>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile/>
        </div>
      </div>
    </>
    </UserLayout>
  );
}

export default User;