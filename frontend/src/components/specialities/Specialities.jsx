import React from 'react'
import { Slide } from 'react-awesome-reveal';

import './Specialities.css'

const Specialities = () => {
    return (
        <>
            <div className="container specialities my-5 py-5">
                <h1 className="display-4" style={{ fontWeight: '700' }}>
                    Explore our Centres of Clinical Excellence
                </h1>
                <h3>
                    Learn about the world class health care we provide
                </h3>
                <div className="d-flex flex-row my-5 py-3">

                    <Slide triggerOnce left duration="1500">
                        <div className="row d-flex flex-row">
                            <div className="col-xs-12 col-lg-5 left justify-content-center" >
                                <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/speciality_ah.webp" alt="" style={{ height: "auto", maxWidth: "100%", borderRadius: "2rem" }} />
                            </div>



                            <div className="col-xs-12 col-lg-7 right d-flex flex-wrap flex-row my-4" >
                                <div className="row row-cols-4 justify-content-sm-center row-cols-lg-5  g-lg-4">
                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/cardiologist/?utm_campaign=cardiologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Cardiology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/cardiology_icon.svg" alt="icon" />
                                            <h5>Cardiology</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/neurologist/?utm_campaign=neurologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Neurology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/neurology.svg" alt="icon" />
                                            <h5>Neurology</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/gastroenterologist/?utm_campaign=gastroenterologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Gastroenterology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/gastroenterology.svg" alt="icon" />
                                            <h5>Gastro-enterology</h5>
                                        </a>
                                    </div>
                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/orthopedician/?utm_campaign=orthopedician&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Orthopaedic">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/orthopaedic.svg" alt="icon" />
                                            <h5>Orthopaedic</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/oncologist/?utm_campaign=oncologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Oncology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/oncology_icon.svg" alt="icon" />
                                            <h5>Oncology</h5>
                                        </a>
                                    </div>





                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/gynecologist/?utm_campaign=gynecologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Gynecology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/gynecology.svg" alt="icon" />
                                            <h5>Gynecology</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/dermatologist/?utm_campaign=dermatologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Dermatology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/dermatology.svg" alt="icon" />
                                            <h5>Dermatology</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/opthalmologist/?utm_campaign=opthalmologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Ophthalmology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ophthalmology.svg" alt="icon" />
                                            <h5>Ophthalmology</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/pediatrician/?utm_campaign=pediatrician&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Pediatrics">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/paediatricurology.svg" alt="icon" />
                                            <h5>Pediatrics</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/endocrinologist/?utm_campaign=endocrinologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Endocrinology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/endocrinology.svg" alt="icon" />
                                            <h5>Endocrinology</h5>
                                        </a>
                                    </div>


                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/urologist/?utm_campaign=urologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Urology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/urology.svg" alt="icon" />
                                            <h5>Urology</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/nephrologist/?utm_campaign=nephrologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Nephrology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/nephrology.svg" alt="icon" />
                                            <h5>Nephrology</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/pulmonologist/?utm_campaign=pulmonologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Pulmonology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/pulmonology.svg" alt="icon" />
                                            <h5>Pulmonology</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/rheumatologist/?utm_campaign=rheumatologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Rheumatology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/rheumatology.svg" alt="icon" />
                                            <h5>Rheumatology</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/neurosurgeon/?utm_campaign=neurosurgeon&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Neurosurgery">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/neurology.svg" alt="icon" />
                                            <h5>Neurosurgery</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/radiologist/?utm_campaign=radiologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Radiology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/radiology.svg" alt="icon" />
                                            <h5>Radiology</h5>
                                        </a>
                                    </div>


                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/plastic-surgeon/?utm_campaign=plastic-surgeon&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Plasticsurgery">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/plasticsurgery.svg" alt="icon" />
                                            <h5>Plastic surgery</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/neonatologist/?utm_campaign=neonatologist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Neonatology">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/neonatology.svg" alt="icon" />
                                            <h5>Neonatology</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/vascular-surgeon/?utm_campaign=vascular-surgeon&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_VascularSurgery">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/vascularsurgery.svg" alt="icon" />
                                            <h5>Vascular Surgery</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/psychiatrist/?utm_campaign=psychiatrist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Psychiatry">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/psychiatry.svg" alt="icon" />
                                            <h5>Psychiatry</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/dentist/?utm_campaign=dentist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_Dentistry">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/dentistry.svg" alt="icon" />
                                            <h5>Dentistry</h5>
                                        </a>
                                    </div>

                                    <div className="col spec">
                                        <a href="https://www.apollohospitals.com/physical-appointment/ent-specialist/?utm_campaign=ent-specialist&amp;utm_source=home&amp;utm_medium=specialities" className="pg_widget" id="COE_ENT">
                                            <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/ent.svg" alt="icon" />
                                            <h5>ENT (Ear, Nose, Throat)</h5>
                                        </a>
                                    </div>




                                </div>
                            </div>


                        </div>
                    </Slide>


                </div>
            </div>

        </>
    )
}

export default Specialities