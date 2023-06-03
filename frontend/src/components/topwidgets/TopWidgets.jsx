import React from 'react'
import './TopWidgets.css'

const TopWidgets = () => {
    return (
        <section className="top-widgets my-4">
            <div className="widget-mr">
                <div className="container-fluid text-center">
                    <div className="row ">

                        <div className="row g-3 g-lg-4 mx-auto justify-content-center">
                            <div className="col widget mx-1 py-2">
                                <a href="#" target="_blank" className="tp_widget" id="btn-cta-bb-book-appointment">
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg" alt="icon" width="64" />
                                    <h5>Book Appointment</h5>
                                </a>
                            </div>
                            <div className="col widget mx-2 py-2">
                                <a href="#" target="_blank" id="btn-cta-bb-book-prohealth" className="tp_widget">
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg" alt="icon" />
                                    <h5>Book ProHealth</h5>
                                </a>
                            </div>
                            <div className="col widget mx-2 py-2">
                                <a href="#" id="btn-cta-bb-consult-online" target="_blank" className="tp_widget">
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg" alt="icon" />
                                    <h5>Consult Online</h5>
                                </a>
                            </div>
                            <div className="col widget mx-2 py-2">
                                <a href="#" id="btn-cta-bb-buy-medicine" target="_blank" className="tp_widget">
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/consultonline_icon.svg" alt="icon" />
                                    <h5>Buy Medicine</h5>
                                </a>
                            </div>

                            <div className="col widget mx-2 py-2">
                                <a href="#" id="btn-cta-bb-find-hospital" className="tp_widget">
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg" alt="icon" />
                                    <h5>Find Hospital</h5>
                                </a>
                            </div>
                            <div className="col widget mx-2 py-2">
                                <a href="#" target="_blank" id="btn-cta-bb-book-labtest" className="tp_widget">
                                    <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/finddoctor_icon.svg" alt="icon" />
                                    <h5>View Health Record</h5>
                                </a>
                            </div>


                        </div>


                    </div>


                </div>
            </div>

            <div className="clear-fix"></div>

        </section>
    )
}

export default TopWidgets