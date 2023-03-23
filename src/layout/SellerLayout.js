import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Footer from "../components/user/Footer";
import Header from "../components/user/Header";

const SellerLayout = ({title = "Title", className, children}) => {
  
  useEffect(()=>{
    const account  = sessionStorage.getItem('user');
    if(!account){
      //Navigate('/home');
    }
  })
  return (
    <>
    <Header/>
    <div className="pt-44 mx-auto w-10/12 h-max">
    {children}
    </div>
    <Footer/>
    </>
  );
}

export default SellerLayout