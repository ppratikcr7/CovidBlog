import React from 'react';
import PropTypes from './propTypes';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import ReactRoundedImage from 'react-rounded-image';

// add image
import card1 from "../../../Assets/card1.png";
import card2 from "../../../Assets/card2.png";
import card4 from "../../../Assets/card4.png";
import user_1 from "../../../Assets/user_1.png";

const { Meta } = Card;

const EventCard = ({
    myOnClick,
    ...restProps
}) => {
    return (
        <Card hoverable onClick={() => myOnClick()} style={{ width: 600, margin: "5px 250px" }}>
            <Meta
                avatar={<ReactRoundedImage
                    image={restProps.image}
                    // roundedColor="#66A5CC"
                    imageWidth="80"
                    imageHeight="80"
                    roundedSize="8"
                    borderRadius="15"
                />}
                title={restProps.title}
                // description={resetProps.desc}
                style={{ float: "left" }}
            />
        </Card>
    );
};

EventCard.propTypes = {
    myOnClick: PropTypes.func,
};

export default EventCard;