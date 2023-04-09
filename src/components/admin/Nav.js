import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Topbar Search */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Tìm kiếm..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm" />
                            </button>
                        </div>
                    </div>
                </form>
                {/* Topbar Navbar */}

                <ul className="navbar-nav ml-auto">
                    {/* Nav Item - Search Dropdown (Visible Only XS) */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw" />
                        </a>
                        {/* Dropdown - Messages */}
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Tìm kiếm..." aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    {/* Nav Item - Thông Báo */}
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bell fa-fw" />
                            {/* Counter - Thông Báo */}
                            <span className="badge badge-danger badge-counter">3+</span>
                        </a>
                        {/* Dropdown - Thông Báo */}
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                            <h6 className="dropdown-header">
                                Thông Báo
                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-primary">
                                        <i className="fas fa-file-alt text-white" />
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">12/3/2023</div>
                                    <span className="font-weight-bold">Một báo cáo mới hàng tháng đã sẵn sàng để tải xuống!</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-success">
                                        <i className="fas fa-donate text-white" />
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">5/1/2023</div>
                                    <span className="font-weight-bold">10.000.000 VNĐ đã được gửi vào tài khoản của bạn!</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                    <div className="icon-circle bg-warning">
                                        <i className="fas fa-exclamation-triangle text-white" />
                                    </div>
                                </div>
                                <div>
                                    <div className="small text-gray-500">18/12/2022</div>
                                    <span className="font-weight-bold">Cảnh báo chi tiêu: Chúng tôi đã nhận thấy chi tiêu cao bất thường cho tài khoản của bạn.</span>
                                </div>
                            </a>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Hiển thị tất cả các thông báo</a>
                        </div>
                    </li>

                    {/* Nav Item - Tin Nhắn */}
                    <li className="nav-item dropdown no-arrow mx-1">
                        <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-envelope fa-fw" />
                            {/* Counter - Tin Nhắn */}
                            <span className="badge badge-danger badge-counter">7</span>
                        </a>
                        {/* Dropdown - Tin Nhắn */}
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                            <h6 className="dropdown-header">
                                Tin Nhắn
                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_1.svg" alt="..." />
                                    <div className="status-indicator bg-success" />
                                </div>
                                <div className="font-weight-bold">
                                    <div className="text-truncate">Chào bạn! Tôi đang tự hỏi nếu bạn có thể giúp tôi với
                                        vấn đề tôi đã gặp phải.</div>
                                    <div className="small text-gray-500">Thị Hạnh · 58m</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_2.svg" alt="..." />
                                    <div className="status-indicator" />
                                </div>
                                <div>
                                    <div className="text-truncate">Tôi có những bức ảnh mà bạn đã đặt hàng vào tháng trước, bạn muốn họ gửi cho bạn như thế nào?</div>
                                    <div className="small text-gray-500">Phan Long · 1d</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="img/undraw_profile_3.svg" alt="..." />
                                    <div className="status-indicator bg-warning" />
                                </div>
                                <div>
                                    <div className="text-truncate">Báo cáo tháng trước có vẻ tuyệt vời, tôi rất hài lòng với sự tiến bộ cho đến nay, tiếp tục công việc tốt!</div>
                                    <div className="small text-gray-500">Ngọc Lộc · 2d</div>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
                                    <div className="status-indicator bg-success" />
                                </div>
                                <div>
                                    <div className="text-truncate">Tôi có phải là một cậu bé tốt không? Lý do tôi hỏi là vì ai đó nói với tôi rằng mọi người nói điều này với tất cả những con chó, ngay cả khi chúng không tốt ...</div>
                                    <div className="small text-gray-500">Văn Hiếu · 2w</div>
                                </div>
                            </a>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Đọc thêm tin nhắn</a>
                        </div>
                    </li>

                    <div className="topbar-divider d-none d-sm-block" />

                    {/* Nav Item - Thông tin cá nhân */}
                    <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                            <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                        </a>
                        {/* Dropdown - Thông tin cá nhân */}
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                            <Link className="dropdown-item" to="/">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                                 Thông Tin Cá Nhân
                            </Link>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                Đăng xuất
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;