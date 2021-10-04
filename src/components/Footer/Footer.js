import React from 'react';

const Footer = () => {
    const footerStyle = {
        width: '50px',
        height: '50px',
        marginRight: '10px',
        padding: '5px'
    }
    return (
        <div className="container bg- py-4 d-flex d-flex justify-content-evenly">
            <hr />
            <h1><b className="text-danger">Path</b>shala</h1>
            <div>
                <h2>Contact Us</h2>
                <hr />
                <div className="d-flex">
                <div className="d-flex m-2">
                    <img style={footerStyle} src="https://i.pinimg.com/originals/4a/0e/1f/4a0e1f8fbec8d2108e0434fc48ef88f3.jpg" alt="" />
                    <div>
                    <h4>Head office:</h4>
                    <p>Surma Plaza (2th Floor)
                         House#41,<br /> Stadium-road, Feni-3900 </p>
                    </div>
                </div>
                <div className="d-flex m-2">
                    <img style={footerStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEmLk8b85_7MuIJF6wruagJWOXbhs9CIRAw&usqp=CAU" alt="" />
                    <div>
                    <p>
                        <span>+880 1800000000</span> 
                        <br />
                        <span>+880 1600000000</span>
                        <br />
                        <span>+880 1900000077</span>
                    </p>
                    </div>
                </div>
                <div className="d-flex m-2 jutify-content-center">
                    <img style={footerStyle} src="https://icons-for-free.com/iconfiles/png/512/google+mail+icon-1320192249286867468.png" alt="" />
                    <div className="my-2">
                    <p>pathshala.bd@gmail.com</p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;