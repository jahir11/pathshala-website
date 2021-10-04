import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {img , name, about} = props.service
    return (
        <Col>
      <Card>
        <Card.Img className="service-img mx-auto" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {about.slice(0, 150)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;