import React from 'react'
import './Disclaimer.css'
import {Zoom} from 'react-awesome-reveal'

const Disclaimer = () => {
    return (
        <>
            <div className='py-3' style={{ backgroundColor: "rgb(235 251 245)" }} >
                <Zoom top triggerOnce duration="1500">

            <div className="container my-5 py-5 ">
                        <h1 className="text-center display-4" style={{ fontWeight: '700' }}>Disclaimer</h1>
                <div className="d-flex justify-content-between overflow-scroll scroll my-5" >
                    <div className="card col-xs-10 col-lg-4" style={{ width: "18rem", marginInline: '2rem' ,minWidth:'14rem'}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col-xs-10 col-lg-4" style={{ width: "18rem", marginInline: '2rem' ,minWidth:'14rem'}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col-xs-10 col-lg-4" style={{ width: "18rem", marginInline: '2rem' ,minWidth:'14rem'}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col-xs-10 col-lg-4" style={{ width: "18rem", marginInline: '2rem' ,minWidth:'14rem'}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card col-xs-10 col-lg-4" style={{ width: "18rem", marginInline: '2rem' ,minWidth:'14rem'}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div>
                </Zoom>

            </div>
        </>
    )
}

export default Disclaimer