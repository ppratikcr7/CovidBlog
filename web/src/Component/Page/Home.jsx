import React from 'react';
import { Layout, Menu, Breadcrumb, Button, Row, Col, Card, Avatar } from 'antd';
import ReactRoundedImage from 'react-rounded-image';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

// Add component
import Header from '../../widget/Header/Header';
import Home_image from "../../Assets/Home_image.jpg";
import card1 from "../../Assets/card1.png";
import card2 from "../../Assets/card2.png";
import card3 from "../../Assets/card3.png";
import card4 from "../../Assets/card4.png";
import user_1 from "../../Assets/user_1.png";
import { WrapperHome } from './Home.style';
import EventCard from '../Common/Card/EventCard';
import { USER_TYPES } from '../Helpers/Constant';


export default class Home extends React.PureComponent {
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
                        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                            <div className="site-layout-background">
                                <Row className="home-content">
                                    <Col span={12} >
                                        <img src={Home_image} alt="" width="100%" height="100%" />
                                    </Col>
                                    <Col span={12}>
                                        <Row>
                                            <EventCard image={card1} title="Governmental User" desc="good work" myOnClick={() => this.myClickHandler(USER_TYPES.GOVERNMENT)} />
                                        </Row>
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
                            </div>
                        </Content>
                    </WrapperHome>
                    <Footer style={{ textAlign: 'center' }}>Covid Blog ©2021 Created by NSAII</Footer>
                </Layout>
            </>
        );
    }
}