import React from 'react'
import NavbarTop from './components/navbar/NavbarTop'
import Navbar from './components/navbar/Navbar'
import Options from './components/options/Options'
import StaticImage from './components/StaticImage'
import TopWidgets from './components/topwidgets/TopWidgets'
import Specialities from './components/specialities/Specialities'
import ChooseHealthcare from './components/choosehealthcare/ChooseHealthcare'
import HospitalsIndia from './components/hospitalsindia/HospitalsIndia'
import InternationalPatient from './components/internationalpatients/InternationalPatient'
import WhatsNew from './components/whatsnew/WhatsNew'
import Disclaimer from './components/disclaimer/Disclaimer'
import Footer from './components/footer/Footer'
import Login  from './components/loginsignup/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup  from './components/loginsignup/signup'
import LoginPage from './components/loginsignup/LoginPage'
import Logindummy from './Logindummy'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/Hospital/' element={[
            <NavbarTop />,
            <Navbar />,
            <Options />,
            <StaticImage />,
            <TopWidgets />,
            <Specialities />,
            <ChooseHealthcare />,
            <HospitalsIndia />,
            <InternationalPatient />,
            <WhatsNew />,
            <Disclaimer />,

            <Footer />


            
            
          ]}/>
          <Route exact path='/Hospital/login' element={ <Login/>} />
          <Route exact path='/Hospital/signup' element={ <Signup/>} />
          <Route exact path='/Hospital/patient' element={ <LoginPage/>} />
          <Route exact path='/Hospital/demo' element={ <Logindummy/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App