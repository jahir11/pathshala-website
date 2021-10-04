import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';
import img from './image/home.jpg'

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./homeService.JSON')
        .then(res  => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
        <Container>
            <Row>
                <Col xs={12} md={6} className="d-flex align-items-center order-1 order-md-0">
                <div>
                    <h1> <b className="text-info ">Complete Your Dreams</b> <br /> With <b className="text-danger">Path</b>shala</h1>
                    <p className="text-black-50 pt-2">Learn any course in the distance and for a reasonable fee. You don't have to struggle alone, you've got our assistance and help. </p>
                    <Button variant="info text-white mt-2">See All Service</Button>
                </div>
                </Col>
                <Col xs={12} md={6} className="order-0 order-md-1">
                    <Image src={img}  />
                </Col>
            </Row>
        </Container>
            {/* home Service section */}
            <div className="m-5 text-center">
                <p className="text-black-50"><small>START LEARNING OUR COURSES</small></p>
                <h1 className="text-info"><b className="text-black-50">Build Your Dream</b> TODAY</h1>
                <Row xs={1} md={4} className="g-4">
                    {
                        services.map(service => <HomeService key={service.id} service={service}></HomeService>)
                    }
                </Row> 
            </div>                               
        </div>
    );
};

export default Home;