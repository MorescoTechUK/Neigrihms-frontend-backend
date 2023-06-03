import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import PhoneIcon from '@mui/icons-material/Phone';
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {

    const data = [
        {
            key: "john",
            value: "John Doe",
        },
        {
            key: "jane",
            value: "Jane Doe",
        },
        {
            key: "mary",
            value: "Mary Phillips",
        },
        {
            key: "robert",
            value: "Robert",
        },
        {
            key: "karius",
            value: "Karius",
        },
    ];

    return (
        <>
            <div className="container text-center ">
                <div className="row">

                    <div className="col-xs-12 col-lg-4 d-flex my-2 justify-content-center my-3">

                        <img src="https://upload.wikimedia.org/wikipedia/en/8/8c/NEIGRIHMS%2C_SHILLONG_Logo.png" alt="" style={{ width: '6vw' }} />
                        <h1 className='ms-3 fw-semibold me-lg-5 display-6 my-auto ' style={{ fontFamily: "Calibre", fontWeight: '700' }}>
                            NEIGRIHMS
                        </h1>
                    </div>
                    <div className="col-xs-8 col-lg-3 my-auto">

                        <div className="my-auto border border-dark rounded  ">

                            <ReactSearchBox
                                placeholder="Search Doctor and Hospital"
                                value="Doe"
                                data={data}
                                callback={(record) => console.log(record)}

                            />
                        </div>
                    </div>
                    <div className="col my-auto d-flex justify-content-center mb-2 mt-2 ms-lg-5" >
                        <div className="d-flex flex-column me-2">
                            <p className="fw-bold " style={{ textAlign: "center", margin: "0.2rem" }}>Emergency</p>
                            <div className="emergency"><PhoneIcon />1066</div>
                        </div>
                        <div className="d-flex flex-column  me-1">
                            <p className="fw-bold " style={{ textAlign: "center", margin: "0.2rem" }}>Lifeline</p>
                            <div className="lifeline "><PhoneIcon />1860-500-1066</div>
                        </div>
                        <Link to="/Hospital/login" className="loginsignup" style={{marginRight:'0px'}}><a></a>Log In</Link>
                        <Link to="/Hospital/signup" className=" loginsignup" style={{ marginLeft: '0.5rem' }}>Sign Up</Link>


                    </div>



                </div>
            </div>
            <hr />
        </>
    )
}

export default Navbar