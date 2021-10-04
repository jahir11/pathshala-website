import React from 'react';
import { Col } from 'react-bootstrap';
import './Facilitie.css'

const Facilitie = (props) => {
    const {name , description , img} = props.facilitie
    return (
        <Col>
            <img className="facilitie-img" src={img} alt="" />
            <h4 className="pt-3">{name}</h4>
            <p>{description}</p>
        </Col>
    );
};

export default Facilitie;