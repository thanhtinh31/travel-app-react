import React, { useEffect } from "react";
import Footer from "../components/user/Footer";
import Header from "../components/user/Header";

const AdminLayout = ({title = "Title", className, children}) => {
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
    {children}
    </div>
    <Footer/>
    </>  
  );
}

export default AdminLayout