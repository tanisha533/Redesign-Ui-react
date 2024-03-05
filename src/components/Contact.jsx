import React from 'react'
import Footer from './Footer';

export default function Contact() {
  return (
    <div>
      {/* Start Contact */}
<div id="contact" className="contact-box">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
      <div className="title-box">
        <h4 style={{color:"#E57373", marginTop:"-25px"}}><b>Contact</b></h4> 
      <p style={{fontSize:"18px",marginTop:"10px"}}> <b> You can message your queries and for any help</b></p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 col-xs-12">
        <div className="contact-block">
          <form id="contactForm">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required 
                          pattern="[A-Za-z\s]+" title="Alphabets and spaces only" />
                        <div className="help-block with-errors" />
                      </div>                                 
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="email" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                  <div className="help-block with-errors" />
                </div> 
              </div>
              <div className="col-md-12">
              <div className="form-group">
                        <input type="text" placeholder="Your number" id="number" className="form-control" name="number" required 
                          pattern="[0-9]{10}" title="Mobile number should be 10 digits long" />
                        <div className="help-block with-errors" />
                      </div> 
              </div>
              <div className="col-md-12">
                <div className="form-group"> 
                  <textarea className="form-control" id="message" placeholder="Your Message" rows={8} data-error="Write your message" required defaultValue={""} />
                  <div className="help-block with-errors" />
                </div>
                <div className="submit-button text-center">
                  <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                  <div id="msgSubmit" className="h3 text-center hidden" /> 
                  <div className="clearfix" /> 
                </div>
              </div>
            </div>            
          </form>
        </div>
      </div>
      <div className="col-lg-12 col-xs-12">
        <div className="left-contact">
          <h2>Address</h2>
          <div className="media cont-line">
            <div className="media-left icon-b">
              <i className="fa fa-location-arrow" aria-hidden="true" />
            </div>
            <div className="media-body dit-right">
              <h4>Address</h4>
              <p>FIRST FLOOR, JAI GANESH SAMARAJYA, C Wing, Pune- Nashik Hwy, PANJARPOL, Bhosari, Pune - 411039, Maharashtra, India</p>
            </div>
          </div>
          <div className="media cont-line">
            <div className="media-left icon-b">
              <i className="fa fa-envelope" aria-hidden="true" />
            </div>
            <div className="media-body dit-right">
              <h4>Email</h4>
              <a href="#">patileyehospital2004@gmail.com</a><br />
            </div>
          </div>
          <div className="media cont-line">
            <div className="media-left icon-b">
              <i className="fa fa-volume-control-phone" aria-hidden="true" />
            </div>
            <div className="media-body dit-right">
              <h4>Phone Number</h4>
              <a href="#">+917447446460</a><br />
              <a href="#">+918888415465</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>

    </div>
  )
}
