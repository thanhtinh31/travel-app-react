import React, { useEffect } from "react";
import Footer from "../components/user/Footer";
import Header from "../components/user/Header";

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
    {children}
    <Footer/>
    </>  
  );
}

export default UserLayout