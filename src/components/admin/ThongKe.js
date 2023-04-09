import React, { Component } from 'react';

class ThongKe extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10'>
                            <h1 className="mb-4 text-left">THỐNG KÊ</h1></div>
                        <div className='col-2'>
                            <button className="btn btn-outline-info btn-block "><i class="fa-solid fa-square-plus"></i> Thêm Mới</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThongKe;