import React from 'react'
import { Fade } from 'react-awesome-reveal';

const StaticImage = () => {
  return (
    <>
    <Fade duration="1500" cascade>

      <div className="container-fluid px-0">
        <img src="https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2020/07/WhatsApp_Image_2020_06_12_at_20_16_38.jpeg?fit=1280%2C960&ssl=1" alt="static image" style={{ width: "100vw",maxHeight:'100vh'}} />
      </div>
      </Fade>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn btn-danger">Left</button>
        <button type="button" class="btn btn-warning">Middle</button>
        <button type="button" class="btn btn-success">Right</button>
      </div>
    </>
  )
}

export default StaticImage