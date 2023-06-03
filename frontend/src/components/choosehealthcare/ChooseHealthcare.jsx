import React from 'react'
import { Slide } from 'react-awesome-reveal'

const ChooseHealthcare = () => {
  return (
    <div className='py-5' style={{ backgroundColor: "rgb(235 251 245)" }} >
      <div className="container " >

        <Slide direction="right" triggerOnce duration="1500">
        <div className="row ">
            <div className="col-md-8">
              <h1 className='display-4' style={{ fontWeight: "700" }}>
                Why Choose ____ Healthcare?
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit commodi laboriosam a, quos vero cumque itaque! Dolores, debitis nisi. Dolorem velit odio id provident sit ullam beatae enim, porro natus, asperiores, fuga adipisci sunt laborum quidem soluta neque eius. Optio molestias temporibus debitis odit. Ea veniam eum maiores nemo inventore!</p>
            </div>

            <div className="col-md-4">
              <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/whychoseapollo_ah.webp" alt="" style={{ maxWidth: "100%", borderRadius: "2rem" }} />
            </div>
        </div>
          </Slide>
      </div>

    </div>
  )
}

export default ChooseHealthcare