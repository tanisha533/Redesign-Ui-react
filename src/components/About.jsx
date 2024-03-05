import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div>
      {/* Start About us */}
      <div id="about" className="about-box" style={{backgroundColor:"#FAF6ED"}}>
        <div className="about-a1">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                  <h5 style={{color:"#F69E64"}}><b>About Us</b></h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row align-items-center about-main-info">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h2 style={{fontWeight:"revert",fontSize:"38px"}}> <b>GET THE BEST CARE & ATTENTION YOU DESERVE</b></h2>
                    Welcome to official website of Patil Eye Hospital - Eye Hospital In Bhosari Pune.
                    <br />
                    <br />Patil Eye Hospital in Bhosari is a NABH Accredited (Entry Level) hospital offering best and affordable eye treatment to patient across Pune,. Maharashtra.                 
                     <p>Highly skilled & experienced Dr. Santosh Patil (Eye Specialist in Bhosari Pune) strives to offer best & consistent patient eye care services.
                      <br /><br />
                      Some of our treatments and procedures includes Cataract Treatment, Glaucoma treatment, squint eye treatment, diabetic retinopathy, Laser counseling etc
                      <br />Explore our site to know more about our facilities, get reliable health information & connect with us instantly.
                       At Patil Eye hospital in Bhosari, we look forward to meet, inform and serve you dedicatedly in your health & well-being needs.

                     Accreditation By : NABH</p>
                     
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 text-right"> 
                    <img src="images/image.png" alt="Second slide"/> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About us */}
    </div>
  );
}
