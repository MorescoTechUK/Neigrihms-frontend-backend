import React from 'react'
import {Zoom } from 'react-awesome-reveal'

const WhatsNew = () => {
    return (
        <>
            <Zoom bottom duration="1500" triggerOnce>

            <div className="container my-5 py-5">
                    <h1 className="text-center mb-3 display-4" style={{ fontWeight: '700' }}>What’s new at Hospital?</h1>
                <div className="row">
                    <h4 className='mb-4'>
                        <b>
                            Media Coverage
                        </b>
                    </h4>
                    <div className="d-flex flex-wrap justify-content-center">
                    <div className="card my-2" style={{ width: "18rem" ,margin:'auto'}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card my-2" style={{ width: "18rem" ,margin:'auto'}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card my-2" style={{ width: "18rem" ,margin:'auto'}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card my-2" style={{ width: "18rem" ,margin:'auto'}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
            </Zoom>
        </>
    )
}

export default WhatsNew