import React, { Component } from 'react';

class QLTaiKhoan extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10'>
                            <h1 className="mb-4 text-left">QUẢN LÝ TÀI KHOẢN</h1></div>
                        <div className='col-2'>
                            <button className="btn btn-outline-info btn-block " data-toggle="modal" data-target="#AddTaiKhoan"><i class="fa-solid fa-square-plus"></i> Thêm Mới</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col">
                            <table className="table table-hover table-inverse">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="align-middle text-center" scope="col">#</th>
                                        <th className="align-middle text-center" scope="col">Họ Và Tên</th>
                                        <th className="align-middle text-center" scope="col">Email</th>
                                        <th className="align-middle text-center" scope="col">Phân Quyền</th>
                                        <th className="align-middle text-center" scope="col">Trạng Thái</th>
                                        <th className="align-middle text-center" scope="col">Chức Năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="align-middle text-center" scope="row">1</th>
                                        <td className="align-middle text-left">Huỳnh Phan Ngọc Lộc</td>
                                        <td className="align-middle text-left">huynhphangocloc@gmail.com</td>
                                        <td className="align-middle text-center">Admin</td>
                                        <td className="align-middle text-center">
                                            <button className="btn btn-success mr-2 btn-block ">Hoạt Động</button>
                                        </td>
                                        <td className="align-middle text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-warning mr-2" data-toggle="modal" data-target="#EditTaiKhoan"><i class="fa-solid fa-pen"></i> Sửa</button>
                                                <button className="btn btn-danger " data-toggle="modal" data-target="#DeleteTaiKhoan" ><i class="fa-solid fa-trash-can"></i> Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="align-middle text-center" scope="row">2</th>
                                        <td className="align-middle text-left">Trần Văn Hiếu</td>
                                        <td className="align-middle text-left">tranvanhieu@gmail.com</td>
                                        <td className="align-middle text-center">Admin</td>
                                        <td className="align-middle text-center">
                                            <button className="btn btn-warning btn-block">Tạm Tắt</button>
                                        </td>
                                        <td className="align-middle text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-warning mr-2" data-toggle="modal" data-target="#EditTaiKhoan"><i class="fa-solid fa-pen"></i> Sửa</button>
                                                <button className="btn btn-danger " data-toggle="modal" data-target="#DeleteTaiKhoan" ><i class="fa-solid fa-trash-can"></i> Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="align-middle text-center" scope="row">3</th>
                                        <td className="align-middle text-left">Nguyễn Thị Hạnh</td>
                                        <td className="align-middle text-left">nguyenthihanh@gmail.com</td>
                                        <td className="align-middle text-center">Admin</td>
                                        <td className="align-middle text-center">
                                            <button className="btn btn-success mr-2 btn-block ">Hoạt Động</button>
                                        </td>
                                        <td className="align-middle text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-warning mr-2" data-toggle="modal" data-target="#EditTaiKhoan"><i class="fa-solid fa-pen"></i> Sửa</button>
                                                <button className="btn btn-danger " data-toggle="modal" data-target="#DeleteTaiKhoan" ><i class="fa-solid fa-trash-can"></i> Xóa</button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Modal Thêm mới  */}
                <div className="modal fade" id="AddTaiKhoan" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title " id="exampleModalLabel">THÊM TÀI KHOẢN</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group text-left">
                                    <label>Họ Và Tên</label>
                                    <input type="text" id="" className="form-control " placeholder='Nhập Họ Và Tên...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Email</label>
                                    <input type="email" id="" className="form-control " placeholder='Nhập Email...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Phân Quyền</label>
                                    <select id="" className="form-control ">
                                        <option >Admin</option>
                                        <option >User</option>
                                    </select>
                                </div>
                                <div className="form-group text-left">
                                    <label>Tình Trạng</label>
                                    <select id="" className="form-control ">
                                        <option >Hoạt Động</option>
                                        <option >Tạm Tắt</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button id="" type="button" className="btn btn-danger" data-dismiss="modal">Thêm Mới</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Chỉnh sửa  */}
                <div className="modal fade" id="EditTaiKhoan" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title " id="exampleModalLabel">CẬP NHẬT TÀI KHOẢN</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input type="" id="" className="form-control " placeholder='id' />
                                <div className="form-group text-left">
                                    <label>Họ Và Tên</label>
                                    <input type="text" id="" className="form-control " placeholder='Nhập Họ Và Tên...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Email</label>
                                    <input type="email" id="" className="form-control " placeholder='Nhập Email...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Phân Quyền</label>
                                    <select id="" className="form-control ">
                                        <option >Admin</option>
                                        <option >User</option>
                                    </select>
                                </div>
                                <div className="form-group text-left">
                                    <label>Tình Trạng</label>
                                    <select id="" className="form-control ">
                                        <option >Hoạt Động</option>
                                        <option >Tạm Tắt</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button id="" type="button" className="btn btn-danger" data-dismiss="modal">Cập Nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Xóa  */}
                <div className="modal fade" id="DeleteTaiKhoan" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">XÓA TÀI KHOẢN</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body text-left">
                                Bạn có chắc chắn muốn xóa tài khoản này hay không?
                                <input type="hidden" id="idDelete" className="form-control" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button id="" type="button" className="btn btn-danger" data-dismiss="modal">Chắc Chắn!</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default QLTaiKhoan;