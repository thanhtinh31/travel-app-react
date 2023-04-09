import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageSide extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Admin <sup>2</sup></div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />

                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">
                    Quản lý
                </div>
                {/* Nav Item - Quản lý tài khoản */}
                <li className="nav-item">
                    <Link className="nav-link" to="/Quan_ly_tai_khoan">
                        <i class="fa-solid fa-users"></i>
                        <span> Quản lý tài khoản</span></Link>
                </li>
                {/* Nav Item - Quản lý danh mục tour */}
                <li className="nav-item">
                    <Link className="nav-link" to="/Quan_ly_danh_muc_tour">
                        <i className="fas fa-fw fa-table" />
                        <span> Quản lý danh mục tour</span></Link>
                </li>
                {/* Nav Item - Quản lý thuế */}
                <li className="nav-item">
                    <Link className="nav-link" to="/Quan_ly_thue">
                        <i class="fa-solid fa-sack-dollar"></i>
                        <span> Quản lý thuế</span></Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Thông Tin Cá Nhân */}
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                    <i class="fa-solid fa-user"></i>
                        <span> Thông Tin Cá Nhân</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Thong_ke" >
                        <i class="fa-solid fa-chart-simple"></i>
                        <span> Thống kê</span>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                <li className="nav-item">
                    <a className="nav-link" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i class="fa-solid fa-power-off"></i>
                        <span> Đăng xuất</span>
                    </a>
                </li>
            </ul>
        );
    }
}

export default PageSide;