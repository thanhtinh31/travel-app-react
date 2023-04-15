import React from "react";
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import dayjs from "dayjs";

function Profile() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Option } = Select;
  return (
    <div className="max-w-screen-md bg-sky-100 mx-auto shadow-md">
      <h2 className="font-semibold text-xl uppercase p-3">Thông tin cá nhân</h2>
      <div className="flex flex-col md:flex-row px-4 py-2">
        <div className="w-36 rounded-full flex flex-col mx-auto items-center">
          <img
            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
            className="rounded-full"
          />
          <Button type="primary" htmlType="submit" className="m-3">
            Đổi ảnh đại diện
          </Button>
        </div>
        <div className="w-full px-4">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Họ và tên"
              name="username"
              rules={[{ required: true, message: "Tên không được để trống" }]}
            >
              <Input defaultValue="Tran van Hieu" />
            </Form.Item>
            <Form.Item
              label="Ngày sinh"
              name="birthday"
              rules={[
                { required: true, message: "Ngày sinh không được để trống" },
              ]}
            >
              <DatePicker placeholder="Chọn ngày sinh" format="DD-MM-YYYY"/>
            </Form.Item>
            <Form.Item
              name="gender"
              label="Giới tính"
              rules={[{ required: true, message: "Giới tính không được để trống" }]}
            >
              <Select placeholder="Chọn giới tính" allowClear defaultValue="Nam">
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
                <Option value="other">Khác</Option>
              </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
          <hr className="mb-4" />
          <Form  name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
          <Form.Item
              label="Email"
              name="Email"
              rules={[{ required: true, message: "Email không được để trống" }]}
            >
              <Input type="email" defaultValue="hieu@gmail.com" />
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="sdt"
              rules={[{ required: true, message: "Số điện thoại không được để trống" }]}
            >
              <Input type="tel" defaultValue="01234556789" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
          <hr className="mb-4" />
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                { required: true, message: "mật khẩu không được để trống" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Mật khẩu mới"
              name="newpassword"
              rules={[
                { required: true, message: "mật khẩu không được để trống" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
