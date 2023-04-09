import React, { Component } from 'react';

class ThongTinCaNhan extends Component {
    render() {
        return (
            <div>
                <div className='container ml-5'>
                    <div className='row'>
                        <div className='col'>
                            <h1 className="mb-4 text-left">THÔNG TIN CÁ NHÂN</h1>
                        </div>
                    </div>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6 text-left font-weight-bold">
                                <label>Tên Tài Khoản</label>
                                <input type="text" className="form-control" placeholder="Tên Tài Khoản" />
                            </div>
                            <div className="form-group col-md-6 text-left font-weight-bold">
                                <label>Mật Khẩu</label>
                                <input type="password" className="form-control" placeholder="Mật Khẩu" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6 text-left font-weight-bold">
                                <label>Họ Và Tên</label>
                                <input type="text" className="form-control" placeholder="Họ và tên" />
                            </div>
                            <div className="form-group col-md-6 text-left font-weight-bold">
                                <label>Ngày Sinh</label>
                                <input type="date" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6 text-left font-weight-bold">
                                <label>Email</label>
                                <input type="Email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-6 text-left font-weight-bold">
                                <label>Số Điện Thoại</label>
                                <input type="tel" className="form-control" placeholder="Số Điện Thoại" /> 
                            </div>
                        </div>
                        <div className="form-group text-left font-weight-bold">
                            <label>Địa Chỉ</label>
                            <textarea class="form-control" rows="3" placeholder='Địa Chỉ'></textarea>
                        </div>
                       
                        <div className='text-right'>
                            <button type="txt" className="btn btn-outline-danger mr-2">Hủy</button>
                            <button type="submit" className="btn btn-success">Cập Nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ThongTinCaNhan;