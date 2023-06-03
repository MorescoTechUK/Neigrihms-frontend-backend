import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
      <footer className='foo'>
          <div className="container py-5">
              <div className="row gx-5">
                  <div className="col-md-3">
                      <img src="https://static.vecteezy.com/system/resources/previews/004/493/181/original/hospital-building-for-healthcare-background-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-free-vector.jpg" alt="" style={{maxWidth:'100%'}}/>
                      <p></p>
                      <p className="small link-danger pt-2 pb-0 mb-0 ftcol">Get A Lot Of Information About Us</p>
                      <h4 className="dp-col4 fs-5 mb-3">Subscribe Our Newsletter</h4>
                      <div className="mb-3">
                          <div className="response-n"></div>
                          <p></p>
                      </div>
                      {/* <form id="form-subscribe-news-letter">
                          <div className="mb-3">
                              <input type="email" className="form-control" id="userEmail" name="email" placeholder="Enter your email id" /><textarea id="pageURL" style={{ display: "none" }} name="page">https://www.hospitals.com</textarea>
                          </div>
                          <p><button type="submit" className="btn btn-primary w-100 ft-btn" id="btn-subscribe-newsletter">Submit</button></p>
                      </form> */}
                      <div className="row mt-3 mt-lg-5 helplineno row-cols-3">
                          <div className="col-sm-12">
                              <div className="d-flex">
                                  <p className="mb-1 ftcol pe-3"><i className="fa-solid fa-phone"></i></p>
                                  <div>
                                      <h6>Emergency</h6>
                                      <p><a href="tel:1066">1066</a></p>
                                      <p></p>
                                  </div>
                                  <p></p>
                              </div>
                              <p></p>
                          </div>
                          <div className="col-sm-12">
                              <div className="d-flex">
                                  <p className="mb-1 ftcol pe-3"><i className="fa-solid fa-phone"></i></p>
                                  <div>
                                      <h6>Hospital Lifeline International</h6>
                                      <p><a href="tel:4043441066">+91 4043441066</a></p>
                                      <p></p>
                                  </div>
                                  <p></p>
                              </div>
                              <p></p>
                          </div>
                          <div className="col-sm-12">
                              <div className="d-flex">
                                  <p className="mb-1 ftcol pe-3"><i className="fa-solid fa-phone"></i></p>
                                  <div>
                                      <h6>Health Help Line</h6>
                                      <p><a href="tel:1860-500-1066">1860-500-1066</a></p>
                                      <p></p>
                                  </div>
                                  <p></p>
                              </div>
                              <p></p>
                          </div>
                          <p></p>
                      </div>
                      <p></p>
                  </div>
                  <div className="col-md-9">
                      <div className="row row-cols-lg-5 row-cols-2">
                          <div className="col">
                              <h5>Patient Care</h5>
                              <ul className="list-unstyled ft-links">
                                  <li><a href="https://www.askHospital.com/" target="_blank">Find A Doctor</a> </li>
                                  <li><a href="/patient-care/service-excellence">Medical Services </a> </li>
                                  <li><a href="/patient-care/testimonial-videos">Patient Testimonials </a> </li>
                                  <li><a href="/patient-care/value-added-services">Value Added Services </a> </li>
                                  <li><a href="https://pay.Hospitalhospitals.com/" target="_blank">Pay Online</a> </li>
                                  <li><a href="/Hospital-surgery/">Hospital Surgery</a> </li>
                              </ul>
                              <h5>International Patients</h5>
                              <ul className="list-unstyled ft-links">
                                  <li><a href="/corporate/company-overview">About Hospital</a> </li>
                                  <li><a href="/locations">Hospitals</a> </li>
                              </ul>
                              <h5>News &amp; Media</h5>
                              <ul className="list-unstyled ft-links">
                                  <li><a href="/Hospital-news">News</a> </li>
                                  <li><a href="/events">Events </a> </li>
                                  <li><a href="/interviews">Interviews </a> </li>
                                  <li><a href="/watch-our-videos">Watch Our Videos</a> </li>
                                  <li><a href="/media-contacts">Media Contacts</a> </li>
                                  <li><a href=""> Hospitals Reviews</a> </li>
                              </ul>
                          </div>
                          <div className="col">
                              <h5>Centres Of Excellence</h5>
                              <ul className="list-unstyled">
                                  <li><a href="/departments/orthopedic">Orthopaedics</a> </li>
                                  <li><a href="/departments/nephrology-urology">Nephrology &amp; Urology </a> </li>
                                  <li><a href="/departments/bariatric-surgery">Bariatric Surgery</a> </li>
                                  <li><a href="/departments/heart">Cardiology</a> </li>
                                  <li><a href="/departments/pulmonology">Pulmonology</a> </li>
                                  <li><a href="/departments/gastroenterology">Gastroenterology</a> </li>
                                  <li><a href="/departments/spine">Spine Surgery</a> </li>
                                  <li><a href="/departments/cancer">Oncology </a> </li>
                                  <li><a href="/departments/neurology-neurosurgery">Neurology &amp; Neurosurgery</a> </li>
                                  <li><a href="/departments/transplantation">Organ Transplantation</a> </li>
                                  <li><a href="/departments/robotics-surgery">Robotic Surgery</a> </li>
                                  <li><a href="/departments/preventivehealth">Preventive Health Check Up</a> </li>
                                  <li><a href="#" target="_blank">Hospital ProHealth</a> </li>
                                  <li><a href="/departments/emergency-trauma-care-services">Emergency Care</a> </li>
                                  <li><a href="/departments/ent">Ear,Nose And Throat </a> </li>
                                  <li><a href="/departments/vascular-surgery">Vascular Surgery</a> </li>
                                  <li><a href="/departments/pediatrics">Pediatrics</a> </li>
                                  <li><a href="/departments/dermatology">Dermatology</a> </li>
                                  <li><a href="/departments/obstetrics-and-gynaecology/">Obstetrics And Gynaecology</a>
                                  </li>
                              </ul>
                          </div>
                          <div className="col">
                              <h5>Medical Procedures</h5>
                              <ul className="list-unstyled">
                                  <li><a href="https://proton.Hospitalhospitals.com/" target="_blank">Proton Therapy For
                                      Cancer Treatment</a> </li>
                                  <li><a href="/procedures/cosmetic-and-aesthetic-surgery">Cosmetic And Plastic
                                      Surgery</a> </li>
                                  <li><a href="/procedures/bone-marrow-transplant/indications">Bone Marrow Transplant </a>
                                  </li>
                                  <li><a href="/procedures/oral-and-maxillofacial-surgery">Oral &amp; Maxillofacial
                                      Surgery </a> </li>
                                  <li><a href="/procedures/hand-micro-surgery">Hand MicroSurgery</a> </li>
                                  <li><a href="/procedures/cutting-edge-technology-gravity-scan">G Scan – Open Standing
                                      MRI Scan</a> </li>
                                  <li><a href="/procedures/hip-arthroscopy">Hip Arthroscopy</a> </li>
                                  <li><a href="/procedures/minimally-invasive-cardiac-surgery">Minimally Invasive Cardiac
                                      Surgery</a> </li>
                                  <li><a href="/procedures/knee-replacement">Knee Replacement Surgery</a> </li>
                                  <li><a href="/procedures/cochlear-implant-surgery">Cochlear Implant Surgery</a> </li>
                              </ul>
                              <h5>Blogs</h5>
                              <ul className="list-unstyled">
                                  <li><a href="#" target="_blank">Health Library</a>
                                  </li>
                                  <li><a href="#" target="_blank">Covid 19 Updates</a> </li>
                                  <li><a href="#" target="_blank">Covid 19 FAQS </a> </li>
                                  <li><a href="#" target="_blank">COVID-19 Vaccination</a> </li>
                                  <li><a href="#" target="_blank">COVID-19 New Symptoms</a> </li>
                              </ul>
                          </div>
                          <div className="col">
                              <h5>Corporate</h5>
                              <ul className="list-unstyled">
                                  <li><a href="/corporate/company-overview">Company Overview</a> </li>
                                  <li><a href="/corporate/our-doctors-achieve?view=ourdoctorsachieve&amp;layout=ourdoctorsachieve">Our
                                      Doctors Achieve</a> </li>
                                  <li><a href="#">The Hospital Ethos</a> </li>
                                  <li><a href="#">The
                                       Story</a> </li>
                                  <li><a href="#">Management</a> </li>
                                  <li><a href="/corporate/investor-relations/financial-reports">Investor Relations</a>
                                  </li>
                                  <li><a href="#">Investor
                                      Presentation</a> </li>
                                  <li><a href="/component/content/?id=221&amp;Itemid=505">Initiatives</a> </li>
                                  <li><a href="/corporate/awards-accolades/management">Awards &amp; Accolades</a> </li>
                                  <li><a href="/corporate/careers">Careers</a> </li>
                              </ul>
                              <h5>Hospitals</h5>
                              <ul className="list-unstyled">
                                  <li><a href="/locations/india">Hospitals In India</a> </li>
                                  <li><a href="/component/content/?id=203&amp;Itemid=220">International Hospitals </a>
                                  </li>
                                  <li><a href="#" target="_blank"> Clinics</a> </li>
                                  <li><a href="/component/content/?id=206&amp;Itemid=222">Reach Hospitals</a> </li>
                                  <li><a href="#"> Cradle</a> </li>
                              </ul>
                          </div>
                          <div className="col">
                              <h5>Academics &amp; Research</h5>
                              <ul className="list-unstyled">
                                  <li><a href="/academics-research/courses/medical">Courses</a> </li>
                                  <li><a href="/academics-research/academics">Academics</a> </li>
                                  <li><a href="/academics-research/clinical-research/recognition-of-published-papers">Clinical
                                      Research</a> </li>
                                  <li><a href="/academics-research/honors-list">Honors List</a> </li>
                                  <li><a href="/academics-research/Hospital-torch-alumni-network"> Torch: Alumni
                                      Network</a> </li>
                                  <li><a href="/academics-research/web-broadcasts">Web Broadcasts</a> </li>
                                  <li><a href="/academics-research/collaborative-forums">Collaborative Forums</a> </li>
                                  <li><a href="/academics-research/what-s-new">What’s New</a> </li>
                              </ul>
                              <h5>Contact Us</h5>
                              <ul className="list-unstyled">
                                  <li><a href="/contact-us/">Post A Query</a> </li>
                                  <li><a href="#" target="_blank">Consult Doctors
                                      Online</a> </li>
                                  <li><a href="#" target="_blank">Book Physical Appointment</a>
                                  </li>
                                  <li><a href="/contact-us">Give Your Feedback</a> </li>
                                  <li><a href="#">Hospital Lifeline</a>
                                  </li>
                              </ul>
                          </div>
                          <p></p>
                      </div>
                      <p></p>
                  </div>
              </div>
              <div className="row justify-content-center py-0">
                  <div className="col-md-10">
                      <div className="ftr_addtln_inof">
                          <div className="row">
                              <div className="col-md-4">
                                  <p>Our stents pricing <a href="/departments/heart/stent-prices-disclosure/" title="Know More About Our Stents Pricing">click here</a></p>
                                  <p><a href="/corporate/careers/recruitment-disclaimer" title="Recruitment Disclaimer">Recruitment disclaimer</a></p>
                                  <p></p>
                              </div>
                              <div className="col-md-5">
                                  <p>Total knee replacement implants pricing <a href="/departments/orthopedic/our-implant-pricing" title="Know More About Knee Replacement Pricing">click here</a></p>
                                  <p><a href="/covid-19-rt-pcr-test" title="Covid-19 RT-PCR Test">Covid-19 RT-PCR Test</a>
                                  </p>
                                  <p></p>
                              </div>
                              <div className="col-md-3">
                                  <p><a href="/departments/transplantation/transplant-disclaimer" title="Transplant Disclaimer">Transplant Disclaimer</a></p>
                                  <p></p>
                              </div>
                              <p></p>
                          </div>
                          <p></p>
                      </div>
                      <p></p>
                  </div>
              </div>

              <div className="row justify-content-center py-0">
                  <div className="col-md-10">
                      <div className="ftr_addtln_inof appstore">
                          <div className="row">
                              <div className="col-sm-6">
                                  <h2>  Healthcare @ your Fingertips </h2>
                                  <h3>Download the app</h3>
                              </div>
                              <div className="col-sm-6">
                                  <div className="d-flex gap-3">
                                      <div className='col-2'><a href="#" target="_blank"> <img src="https://i1.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/07/current-google-play-icon.jpg?ssl=1" alt="Apple Store" className="img-fluid" style={{maxWidth:'100%'}}/> </a> </div>
                                      <div className='col-4'><a href="#" target="_blank"> <img src="https://www.vectorlogo.zone/logos/apple_appstore/apple_appstore-ar21.png" alt="Play Store" className="img-fluid"
                                          style={{ maxWidth: '100%' }}/> </a> </div>

                                  </div>

                              </div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer

