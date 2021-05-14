import React, { useState } from 'react';
import { Form, Input, Select, Row, Col, Checkbox, Button, Layout } from 'antd';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export default function Signup() {
    const [form] = Form.useForm();
    const { Option } = Select;
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    return (
        <Layout>
            <h1 style={{ padding: '0 350px', marginTop: 134, textAlign: "center" }}>Sign Up</h1>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                }}
                scrollToFirstError
                style={{ padding: '0 450px', marginTop: 34 }}
            >
                <Form.Item
                    name="type"
                    label="User Type"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your user type',
                        },
                    ]}
                >
                    <Select defaultValue="Governmental User" style={{ width: "100%" }} onChange={handleChange}>
                        <Option value="jack">Governmental User</Option>
                        <Option value="lucy">Institutional User (Hospitals, Nursing homes or Pharmacies)</Option>
                        <Option value="disabled">Vaccine taken Covid Patient</Option>
                        <Option value="Yiminghe">General User (Non-Covid)</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last name',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Mobile Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your mobile number!',
                        },
                    ]}
                >
                    <Input
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label="User Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your user name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
        </Button>
                </Form.Item>
            </Form>
        </Layout>
    );
};