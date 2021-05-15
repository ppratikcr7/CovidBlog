import React, { useState } from 'react';
import { Form, Input, Select, Row, Col, Button, Layout, Radio, message, Typography, DatePicker } from 'antd';
import moment from "moment";
import { FormWrapper } from './Home.style';
import { USER_TYPES } from '../Helpers/Constant';
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
const { Title, Text } = Typography;
const dateFormat = "YYYY/MM/DD";

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

export default function Signup(props) {
    let [dateOfBirth, setDateOfBirth] = useState();
    const [form] = Form.useForm();
    const { location } = props;
    const { Option } = Select;
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    function handleDatePickerChange(date, dateString) {
        setDateOfBirth(dateString);
    }
    return (
        <Layout>
            <h1 style={{ padding: '0 350px', marginTop: 134, textAlign: "center" }}>Sign Up</h1>
            <FormWrapper>
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
                    style={{ padding: '0 380px', marginTop: 34 }}
                >
                    {/* <Form.Item
                        name="userType"
                        label="User Type"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your user type',
                            },
                        ]}
                    >
                        <Input disabled value={location.state.key} />
                    </Form.Item> */}
                    {(props.location.state.key === USER_TYPES.GOVERNMENT || props.location.state.key === USER_TYPES.INSTITUTIONAL) &&
                        <>
                            <Form.Item
                                name="title"
                                label="Title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your title',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="designation "
                                label="Designation "
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your designation ',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="institution"
                                label="Institution"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your institution',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="address"
                                label="Address"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your address',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="city"
                                label="City"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your city',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="state"
                                label="State"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your state',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="pincode"
                                label="Pin Code"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your pin code',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </>
                    }
                    {props.location.state.key === USER_TYPES.GOVERNMENT &&
                        <Form.Item
                            name="department"
                            label="Department"
                        >
                            <Input />
                        </Form.Item>
                    }


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
                    {(props.location.state.key === USER_TYPES.VACCINE || props.location.state.key === USER_TYPES.GENERAL) &&
                        <>
                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your gender',
                                    },
                                ]}
                            >
                                <Radio.Group name="radiogroup" defaultValue={3}>
                                    <Radio value={1}>Male</Radio>
                                    <Radio value={2}>Female</Radio>
                                    <Radio value={3}>Decline to answer</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item
                                name="dob"
                                label="Birth Date"
                                extra={
                                    <>
                                        <Text type="secondary">Would you like to make it public ?</Text>
                                        <Radio.Group name="radiogroup" defaultValue={2}>
                                            <Radio value={1}>Yes</Radio>
                                            <Radio value={2}>No</Radio>
                                        </Radio.Group>
                                    </>
                                }
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your date of birth',
                                    },
                                ]}
                            >
                                <DatePicker
                                    name="birthDate"
                                    // defaultValue={moment(
                                    //     "2015/01/01",
                                    //     dateFormat
                                    // )}
                                    format={dateFormat}
                                    onChange={(date, dateString) =>
                                        handleDatePickerChange(date, dateString)
                                    }
                                />
                            </Form.Item>
                        </>
                    }

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        extra={
                            <>
                                <Text type="secondary">Would you like to make it public ?</Text>
                                <Radio.Group name="radiogroup" defaultValue={2}>
                                    <Radio value={1}>Yes</Radio>
                                    <Radio value={2}>No</Radio>
                                </Radio.Group>
                            </>
                        }
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
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
                        extra={
                            <>
                                <Text type="secondary">Would you like to make it public ?</Text>
                                <Radio.Group name="radiogroup" defaultValue={2}>
                                    <Radio value={1}>Yes</Radio>
                                    <Radio value={2}>No</Radio>
                                </Radio.Group>
                            </>
                        }
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
                    {props.location.state.key === USER_TYPES.VACCINE &&
                        <Form.Item
                            name="number"
                            label="Vaccination Number"
                            extra={
                                <>
                                    <Text type="secondary">Would you like to make it public ?</Text>
                                    <Radio.Group name="radiogroup" defaultValue={2}>
                                        <Radio value={1}>Yes</Radio>
                                        <Radio value={2}>No</Radio>
                                    </Radio.Group>
                                </>
                            }
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your vaccination registration number!',
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                    }

                    <Form.Item
                        name="userName"
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
                    {/* <Form.Item
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
                </Form.Item> */}
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Register
        </Button>
                    </Form.Item>
                </Form>
            </FormWrapper>
        </Layout>
    );
};