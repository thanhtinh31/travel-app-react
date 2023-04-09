import React, { useEffect } from "react";
import Footer from "../components/user/Footer";
import Header from "../components/user/Header";
import { Outlet } from "react-router-dom";

const UserLayout = ({title = "Title", className, children}) => {
//   const history= useHistory();
//   useEffect(()=>{
//     const account  = sessionStorage.getItem('user');
//     if(!account){
//       history.replace('/login');
//     }
//   })
  return (
    <>
    <Header/>
    <div className="pt-44 mx-auto w-10/12 h-max">      
    {/* {children} */}
    <Outlet/>
    </div>
    <Footer/>
    </>  
  );
}

export default UserLayout