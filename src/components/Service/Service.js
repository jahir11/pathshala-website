import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id ,img , name, about} = props.service
    return (
        <Col>
      <Card>
        <Card.Img className="service-img mx-auto" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {about.slice(0, 150)}<b>....</b>
          </Card.Text>
        </Card.Body>
        <Link className="text-danger p-2" to={`/services/${id}`}>Read More</Link>
      </Card>
    </Col>
    );
};

export default Service;