import React, { Component } from 'react';

class QLThue extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10'>
                            <h1 className="mb-4 text-left">QUẢN LÝ THUẾ</h1></div>
                        <div className='col-2'>
                            <button className="btn btn-outline-info btn-block "  data-toggle="modal" data-target="#AddThue"><i class="fa-solid fa-square-plus"></i> Thêm Mới</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col">
                            <table className="table table-hover table-inverse">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="align-middle text-center" scope="col">#</th>
                                        <th className="align-middle text-center" scope="col">Tên Thuế</th>
                                        <th className="align-middle text-center" scope="col">Tỷ Lệ Thuế</th>
                                        <th className="align-middle text-center" scope="col">Ngày Bắt Đầu</th>
                                        <th className="align-middle text-center" scope="col">Ngày Kết Thúc</th>
                                        <th className="align-middle text-center" scope="col">Trạng Thái</th>
                                        <th className="align-middle text-center" scope="col">Chức Năng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className="align-middle text-center" scope="row">1</th>
                                        <td className="align-middle text-left">VAT</td>
                                        <td className="align-middle text-center">10%</td>
                                        <td className="align-middle text-center">18/12/2019</td>
                                        <td className="align-middle text-center">18/12/2101</td>
                                        <td className="align-middle text-center">
                                            <button className="btn btn-success mr-2 ">Hoạt Động</button>
                                        </td>
                                        <td className="align-middle text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-warning mr-2" data-toggle="modal" data-target="#EditThue"><i class="fa-solid fa-pen"></i> Sửa</button>
                                                <button className="btn btn-danger " data-toggle="modal" data-target="#DeleteThue"><i class="fa-solid fa-trash-can"></i> Xóa</button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {/* Modal Thêm mới  */}
                <div className="modal fade" id="AddThue" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title " id="exampleModalLabel">THÊM THUẾ</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group text-left">
                                    <label>Tên Thuế</label>
                                    <input type="text" id="" className="form-control " placeholder='Nhập Tên Thuế...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Tỷ Lệ Thuế</label>
                                    <input type="text" id="" className="form-control " placeholder='Nhập Tỷ Lệ Thuế...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Ngày Bắt Đầu</label>
                                    <input type="date" id="" className="form-control " placeholder='Nhập Ngày Bắt Đầu...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Ngày Kết Thúc</label>
                                    <input type="date" id="" className="form-control " placeholder='Nhập Ngày Kết Thúc...' />
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
                <div className="modal fade" id="EditThue" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title " id="exampleModalLabel">CẬP NHẬT THUẾ</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input type="" id="" className="form-control " placeholder='id' />
                                <div className="form-group text-left">
                                    <label>Tên Thuế</label>
                                    <input type="text" id="" className="form-control " placeholder='Nhập Tên Thuế...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Tỷ Lệ Thuế</label>
                                    <input type="text" id="" className="form-control " placeholder='Nhập Tỷ Lệ Thuế...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Ngày Bắt Đầu</label>
                                    <input type="date" id="" className="form-control " placeholder='Nhập Ngày Bắt Đầu...' />
                                </div>
                                <div className="form-group text-left">
                                    <label>Ngày Kết Thúc</label>
                                    <input type="date" id="" className="form-control " placeholder='Nhập Ngày Kết Thúc...' />
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
                <div className="modal fade" id="DeleteThue" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">XÓA THUẾ</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body text-left">
                                Bạn có chắc chắn muốn xóa thuế này hay không?
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

export default QLThue;