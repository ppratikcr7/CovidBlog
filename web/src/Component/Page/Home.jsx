import React from 'react';
import { Layout, Menu, Breadcrumb, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

// Add component
import Header from '../../widget/Header/Header';
import { WrapperHome } from './Home.style';

export default class Home extends React.PureComponent {
    render() {
        const { Content, Footer } = Layout;
        return (
            <>
                <Layout>

                    <WrapperHome>
                        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}
                            <div className="site-layout-background">
                                <Row className="home-content">
                                    <Col span={24}>
                                        <h1>Welcome to Covid Blog</h1>
                                        <h4>A Covid-Blogging Application</h4>
                                        <Button type="primary" onClick={() => this.props.history.push("signup")}>Signup</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Content>
                    </WrapperHome>
                    <Footer style={{ textAlign: 'center' }}>Covid Blog ©2021 Created by NSAII</Footer>
                </Layout>

            </>
        );
    }
}