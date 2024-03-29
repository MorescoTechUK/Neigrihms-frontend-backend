import React from 'react'
import './Login.css'
import { useState, useCallback } from 'react'
import axios from 'axios'
import LoginPage from './LoginPage'

const Signup = () => {

    const [email, setemail] = useState("")
    const [firstName, setfirstName] = useState("")
    const [middleName, setmiddleName] = useState("")
    const [lastName, setlastName] = useState("")
    const [height, setheight] = useState("")
    const [weight, setweight] = useState("")
    const [phone, setphone] = useState("")
    const [gender, setgender] = useState("")
    const [bloodGrp, setbloodGrp] = useState("")
    const [location, setlocation] = useState("")
    const [password, setpassword] = useState("")
    const [token, settoken] = useState("")
    const [validregis, setvalidregis] = useState(false)


    const jsonData = {
        "email": email,
        "password": password
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };

    const registerbodyParameters = {

        "password": password,
        "firstName": firstName,
        "middleName": middleName,
        "lastName": lastName,
        "email": email,
        "phone": phone,
        "gender": gender,
        "height": height,
        "weight": weight,
        "bloodGrp": bloodGrp,
        "location": location,
    };

    const loginbodyParameters = {
        "email": email,
        "password": password
    }


    const handleClick = (e) => {
        e.preventDefault();
        console.log(registerbodyParameters)

        axios.post('http://localhost:5001/api/patient/register', registerbodyParameters)
            .then(data => {
                console.log(data)
                setvalidregis(true)

            })
            .catch(err => {
                console.log(err)
            })

        {
            validregis && axios.post('http://localhost:5001/api/patient/login', loginbodyParameters)
                .then(data => {
                    settoken(data.data.accessToken)

                })
                .catch(err => {
                    console.log(err)
                })
        }

    }

    return (
        <>
            {token !== "" ? <LoginPage token={token} /> :
                <div>

                    {/* Section: Design Block */}
                    <section className="background-radial-gradient overflow-hidden">
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  "
                            }}
                        />
                        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                            <div className="row gx-lg-5 align-items-center mb-5">
                                <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                                    <h1
                                        className="my-5 display-5 fw-bold ls-tight"
                                        style={{ color: "hsl(218, 81%, 95%)" }}
                                    >
                                        The best offer <br />
                                        <span style={{ color: "hsl(218, 81%, 75%)" }}>
                                            for your business
                                        </span>
                                    </h1>
                                    <p
                                        className="mb-4 opacity-70"
                                        style={{ color: "hsl(218, 81%, 85%)" }}
                                    >
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Temporibus, expedita iusto veniam atque, magni tempora mollitia
                                        dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab
                                        ipsum nisi dolorem modi. Quos?
                                    </p>
                                </div>
                                <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                                    <div
                                        id="radius-shape-1"
                                        className="position-absolute rounded-circle shadow-5-strong"
                                    />
                                    <div
                                        id="radius-shape-2"
                                        className="position-absolute shadow-5-strong"
                                    />
                                    <div className="card bg-glass">
                                        <div className="card-body px-4 py-5 px-md-5">
                                            <form>
                                                {/* 2 column grid layout with text inputs for the first and last names */}
                                                <div className="row">
                                                    <div className="col-md-4 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                onChange={(e) => setfirstName(e.target.value)}
                                                                type="text"
                                                                id="form3Example1"
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="form3Example1">
                                                                First name
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                onChange={(e) => setmiddleName(e.target.value)}
                                                                type="text"
                                                                id="form3Example1"
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="form3Example1">
                                                                Middle name
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                onChange={(e) => setlastName(e.target.value)}
                                                                type="text"
                                                                id="form3Example2"
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="form3Example2">
                                                                Last name
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                onChange={(e) => setphone(e.target.value)}
                                                                type="text"
                                                                id="form3Example1"
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="form3Example1">
                                                                Phone
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                onChange={(e) => setgender(e.target.value)}
                                                                type="text"
                                                                id="form3Example1"
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="form3Example1">
                                                                Gender
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                onChange={(e) => setlocation(e.target.value)}
                                                                type="text"
                                                                id="form3Example2"
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="form3Example2">
                                                                Location
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                onChange={(e) => setheight(e.target.value)}
                                                                type="text"
                                                                id="form3Example1"
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="form3Example1">
                                                                Height
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                onChange={(e) => setweight(e.target.value)}
                                                                type="text"
                                                                id="form3Example1"
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="form3Example1">
                                                                Weight
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-4">
                                                        <div className="form-outline">
                                                            <input
                                                                onChange={(e) => setbloodGrp(e.target.value)}
                                                                type="text"
                                                                id="form3Example2"
                                                                className="form-control"
                                                            />
                                                            <label className="form-label" htmlFor="form3Example2">
                                                                Blood Group
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Email input */}
                                                <div className="form-outline mb-4">
                                                    <input
                                                        onChange={(e) => setemail(e.target.value)}
                                                        type="email"
                                                        id="form3Example3"
                                                        className="form-control"
                                                    />
                                                    <label className="form-label" htmlFor="form3Example3">
                                                        Email address
                                                    </label>
                                                </div>
                                                {/* Password input */}
                                                <div className="form-outline mb-4">
                                                    <input
                                                        onChange={(e) => setpassword(e.target.value)}
                                                        type="password"
                                                        id="form3Example4"
                                                        className="form-control"
                                                    />
                                                    <label className="form-label" htmlFor="form3Example4">
                                                        Password
                                                    </label>
                                                </div>
                                                {/* Checkbox */}

                                                {/* Submit button */}
                                                <button
                                                    onClick={handleClick}
                                                    type="submit"
                                                    className="btn btn-primary btn-block mb-4"
                                                >
                                                    Sign up
                                                </button>
                                                {/* Register buttons */}
                                                <div className="text-center">
                                                    <p>or sign up with:</p>
                                                    <button
                                                        type="button"
                                                        className="btn btn-link btn-floating mx-1"
                                                    >
                                                        <i className="fab fa-facebook-f" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-link btn-floating mx-1"
                                                    >
                                                        <i className="fab fa-google" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-link btn-floating mx-1"
                                                    >
                                                        <i className="fab fa-twitter" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-link btn-floating mx-1"
                                                    >
                                                        <i className="fab fa-github" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>}

        </>






    )
}

export default Signup