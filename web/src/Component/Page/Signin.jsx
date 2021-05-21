import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { WrapperLogin } from './Home.style';
import 'antd/dist/antd.css';

export default function Signin() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const buttonItemLayout = {
        wrapperCol: { span: 18, offset: 9 },
    };

    return (
        <WrapperLogin>
            <Layout>
                <h1 style={{ padding: '0 350px', marginTop: 134, textAlign: "center" }}>Login</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    style={{ padding: '0 450px', marginTop: 34 }}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button shape="round" block type="primary" htmlType="submit" className="login-form-button button-container">
                            Log in
                        </Button>
                        <br />

                    </Form.Item>
                    <div style={{ textAlign: "center" }}>
                        <div>
                            <a className="login-form-forgot" href="#">
                                Forgot password
                        </a>
                        </div>
                        <div>
                            Don't have an account? <a href="/signup">Register Now!</a>
                        </div>
                    </div>
                </Form>
            </Layout>
        </WrapperLogin>
    );
};
