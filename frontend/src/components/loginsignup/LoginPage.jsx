import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const LoginPage = ({ token }) => {

    console.log(token)
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };

    const [details, setdetails] = useState({})

    useEffect(() => {
        axios.get('http://localhost:5001/api/patient/current', config)
            .then(data => {
                console.log(data.data)
                setdetails(data.data)
                
            })
            .catch(err => { console.log(err) })

    }, [])

    console.log(details)
    return (
        <>
      
        <div>
            LoginPage
                <div>
                    {JSON.stringify(details)}
            </div>
        </div>
        </>
      
  )
}

export default LoginPage