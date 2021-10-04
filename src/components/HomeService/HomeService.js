import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HomeService.css'

const HomeService = (props) => {
    const {name, about, img} = props.service
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="service-img mx-auto" variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about.slice(0, 100)}<b>....</b>
                    </Card.Text>
                    </Card.Body>
                    <NavLink className="text-danger p-2" to={`/services`}>Read More</NavLink>
                </Card>
                </Col>
        </div>
    );
};

export default HomeService;