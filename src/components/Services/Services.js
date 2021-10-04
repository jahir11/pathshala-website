import React from 'react';
import { Row } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useService();
    return (
        <div className="text-center">
            <h1>Our Services</h1>
            <Row xs={1} md={4} className="g-4">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </Row>
        </div>
    );
};

export default Services;