import React, { Component } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import {  Route, Routes } from 'react-router-dom';
import QLTaiKhoan from './QLTaiKhoan';
import QLDanhMucTour from './QLDanhMucTour';
import QLThue from './QLThue';
import ThongKe from './ThongKe';
import ThongTinCaNhan from './ThongTinCaNhan';


class PageContent extends Component {
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column">
                {/*Content */}
                <div id="content">
                    {/* Top bar */}
                    <Nav />
                    {/* Main Content */}
                    <Routes>
                        <Route path='/' element={<ThongTinCaNhan/>} />
                        <Route path='/Quan_ly_tai_khoan' element={<QLTaiKhoan/>} />
                        <Route path='/Quan_ly_danh_muc_tour' element={<QLDanhMucTour/>} />
                        <Route path='/Quan_ly_thue' element={<QLThue/>} />
                        <Route path='/Thong_ke' element={<ThongKe/>} />    
                    </Routes>                
                </div>
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

export default PageContent;