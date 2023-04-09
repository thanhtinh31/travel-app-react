import React, { Component } from 'react';

class QLDanhMucTour extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10'>
                            <h1 className="mb-4 text-left">QUẢN LÝ DANH MỤC TOUR</h1></div>
                        <div className='col-2'>
                            <button className="btn btn-outline-info btn-block " data-toggle="modal" data-target="#AddTour"><i class="fa-solid fa-square-plus"></i> Thêm Mới</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col">
                            <table className="table table-hover table-inverse">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="align-middle text-center" scope="col">#</th>
                                        <th className="align-middle text-center" scope="col">Tên Danh Mục</th>
                                        <th className="align-middle text-center" scope="col">Mô Tả</th>
                                        <th className="align-middle text-center" scope="col">Hình Ảnh</th>
                                        <th className="align-middle text-center" scope="col">Trạng Thái</th>
                                        <th className="align-middle text-center" scope="col">Chức Năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="align-middle text-center" scope="row">1</th>
                                        <td className="align-middle text-left">Du lịch biển</td>
                                        <td className="align-middle text-left">Du lịch biển </td>
                                        <td className="align-middle text-center">ẢNH TUI ĐÓ</td>
                                        <td className="align-middle text-center">
                                            <button className="btn btn-warning btn-block ">Tạm Tắt</button>
                                        </td>
                                        <td className="align-middle text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-warning mr-2" data-toggle="modal" data-target="#EditTour"><i class="fa-solid fa-pen"></i> Sửa</button>
                                                <button className="btn btn-danger " data-toggle="modal" data-target="#DeleteTour"><i class="fa-solid fa-trash-can"></i> Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="align-middle text-center" scope="row">2</th>
                                        <td className="align-middle text-left">Du lịch núi</td>
                                        <td className="align-middle text-left">Du lịch núi </td>
                                        <td className="align-middle text-center">ẢNH TUI ĐÓ</td>
                                        <td className="align-middle text-center">
                                            <button className="btn btn-success btn-block ">Hoạt Động</button>
                                        </td>
                                        <td className="align-middle text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-warning mr-2" data-toggle="modal" data-target="#EditTour"><i class="fa-solid fa-pen"></i> Sửa</button>
                                                <button className="btn btn-danger " data-toggle="modal" data-target="#DeleteTour"><i class="fa-solid fa-trash-can"></i> Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="align-middle text-center" scope="row">3</th>
                                        <td className="align-middle text-left">Du lịch phố</td>
                                        <td className="align-middle text-left">Du lịch phố </td>
                                        <td className="align-middle text-center">ẢNH TUI ĐÓ</td>
                                        <td className="align-middle text-center">
                                            <button className="btn btn-warning btn-block ">Tạm Tắt</button>
                                        </td>
                                        <td className="align-middle text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-warning mr-2" data-toggle="modal" data-target="#EditTour"><i class="fa-solid fa-pen"></i> Sửa</button>
                                                <button className="btn btn-danger " data-toggle="modal" data-target="#DeleteTour"><i class="fa-solid fa-trash-can"></i> Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {/* Modal Thêm mới  */}
                <div className="modal fade" id="AddTour" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title " id="exampleModalLabel">THÊM DANH MỤC TOUR</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group text-left">
                                    <label>Tên Danh Mục</label>
                                    <input type="text" id="" className="form-control " placeholder='Nhập Tên Danh Mục...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Mô Tả</label>
                                    <input type="text" id="" className="form-control " placeholder='Nhập Mô Tả...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Hình Ảnh</label>
                                    <input type="file" className="form-control-file" name="" />
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
                <div className="modal fade" id="EditTour" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title " id="exampleModalLabel">CẬP NHẬT DANH MỤC TOUR</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input type="" id="" className="form-control " placeholder='id' />
                                <div className="form-group text-left">
                                    <label>Tên Danh Mục</label>
                                    <input type="text" id="" className="form-control " placeholder='Nhập Tên Danh Mục...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Mô tả</label>
                                    <input type="text" id="" className="form-control " placeholder='Nhập Mô tả...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Hình Ảnh</label>
                                    <input type="file" className="form-control-file" name="" />
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
                <div className="modal fade" id="DeleteTour" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">XÓA DANH MỤC TOUR</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body text-left">
                                Bạn có chắc chắn muốn xóa danh mục tour này hay không?
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

export default QLDanhMucTour;