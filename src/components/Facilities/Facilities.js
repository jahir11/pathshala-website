import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Facilitie from '../Facilitie/Facilitie';

const Facilities = () => {
    const [facilities, setFacilities] = useState([])
    useEffect(() => {
        fetch('./facilitiesData.JSON')
        .then(res => res.json())
        .then(data => setFacilities(data))
    }, [])
    return (
       <div>
            <div className="text-black-50 text-center m-4">
                <h1>Our Facilities</h1>
                <p>Explore the weapons of Lastest Information Technology</p>
            </div>
            <div className="container">
            <Row xs={1} md={3} className="g-4">
                {
                    facilities.map(facilitie => <Facilitie key={facilitie.id} facilitie={facilitie}></Facilitie>)
                }
            </Row>
            </div>
       </div>
    );
};

export default Facilities;
