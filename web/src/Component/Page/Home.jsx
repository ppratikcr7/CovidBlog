import React from 'react';
import { Layout, Menu, Breadcrumb, Button, Row, Col, Card, Avatar, Typography, Space } from 'antd';
import ReactRoundedImage from 'react-rounded-image';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

// Add component
import Header from '../../widget/Header/Header';
import Home_image from "../../Assets/banner.jpeg";
import card1 from "../../Assets/card1.png";
import card2 from "../../Assets/card2.png";
import card3 from "../../Assets/card3.png";
import card4 from "../../Assets/card4.png";
import { WrapperHome } from './Home.style';
import EventCard from '../Common/Card/EventCard';
import { USER_TYPES } from '../Helpers/Constant';


export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        }
    }
    myClickHandler = (params) => {
        if (params) {
            this.props.history.push({
                pathname: "/signup",
                state: {
                    key: params
                }
            });
        }

    }
    render() {
        const { Content, Footer } = Layout;
        const { Meta } = Card;
        return (
            <>
                <Layout>
                    <WrapperHome>
                        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 104 }}>
                            <div className="site-layout-background">
                                <br/>
                                {!this.state.isClicked ?
                                    <Row className="home-content">
                                        <Col span={12} >
                                            <img src={Home_image} alt="" width="100%" height="100%" />
                                        </Col>
                                        <Col span={12} >
                                            <div style={{ marginTop:100, lineHeight: "38px", textAlign: "center", width: "90%" }}>
                                                <p style={{ fontSize: "46px", justifyContent: "right" }}><b>Happening Now</b></p>
                                                <p style={{ fontSize: "20px", justifyContent: "right" }}><b>Join TheSkirr Today</b></p>
                                                <br/>
                                                <Button style={{marginBottom: 10, width: 400}} onClick={() => this.setState({ isClicked: true })} shape="round" size={'large'} block type="primary" htmlType="submit" className="login-form-button button-container">
                                                    Sign Up
                                                </Button>
                                                <Button style={{width: 400}} onClick={() => {}} shape="round" size={'large'} block htmlType="submit" className="login-form-button button-container">
                                                        Login
                                                </Button>
                                            </div>
                                        </Col>
                                        
                                    </Row>
                                    :
                                    <Row className="home-content">
                                        <Col span={24}>
                                            <Row>
                                                <EventCard image={card1} title="Governmental User" desc="good work" myOnClick={() => this.myClickHandler(USER_TYPES.GOVERNMENT)} />
                                            </Row>
                                            {/* </Col> */}
                                            <Row>
                                                <EventCard image={card2} title="Institutional User (Hospitals, Nursing homes or Pharmacies)" desc="good work" myOnClick={() => this.myClickHandler(USER_TYPES.INSTITUTIONAL)} />
                                            </Row>
                                            <Row>
                                                <EventCard image={card3} title="Vaccine taken Covid Patient" desc="good work" myOnClick={() => this.myClickHandler(USER_TYPES.VACCINE)} />
                                            </Row>
                                            <Row>
                                                <EventCard image={card4} title="General User (Non-Covid and Non-Vaccinated)" desc="good work" myOnClick={() => this.myClickHandler(USER_TYPES.GENERAL)} />
                                            </Row>
                                        </Col>
                                    </Row>
                                }
                            </div>
                        </Content>
                    </WrapperHome>
                    <Footer style={{ textAlign: 'center' }}>
                        <Space size={3}>
                            <Button type="link">About</Button>
                            <Button type="link">Help Center</Button>
                            <Button type="link">Terms Of Service</Button>
                            <Button type="link">Privacy Policy</Button>
                            <Button type="link">Cookie Policy</Button>
                            <Button type="link">Ads info</Button>
                            <Button type="link">Blog</Button>
                            <Button type="link">Status</Button>
                            <Button type="link">Careers</Button>
                            <Button type="link">Brand Resources</Button>
                            <Button type="link">Advertising</Button>
                            <Button type="link">Marketing</Button>
                        </Space>
                        <Typography>Covid Blog ©2021 Created by NSAII</Typography>
                    </Footer>
                </Layout>
            </>
        );
    }
}