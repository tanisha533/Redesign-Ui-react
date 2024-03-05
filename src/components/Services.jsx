import React from 'react';
import Footer from './Footer';

export default function Services() {
  return (
    <div>
      {/* Start Services */}
      <div>
        <div id="fh5co-services-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center fh5co-heading animate-box">
                <div className="title-box align center">
                  <h4 style={{color:"#E57373", marginTop:"-40px"}}><b>Services</b></h4> 
                  <p style={{fontSize:"18px",marginTop:"10px"}}><b>Our Awesome Features and treatments here</b></p>
                  <br /><br />
                </div>
              </div>
            </div>
            <div className="row">
              {/* Add your treatment and procedure content here */}
              <div className="col-md-4 animate-box">
                <div className="services">
                  <i className="icon-laptop" />
                  <div className="desc">
                    <h3>Treatment 1</h3>
                    <p>We diagnose various ailments and diseases and offer specialized treatments or perform procedures to help you tackle your condition better or recover faster.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 animate-box">
                <div className="services">
                  <i className="icon-server" />
                  <div className="desc">
                    <h3>Treatment 2</h3>
                    <p>Description of Treatment 2Glaucoma management, pediatric Services, Refractive errors , Uveitis and Oculoplasty are also included in our treatment to ensure patients health and promissing best treatments</p>
                  </div>
                </div>
              </div>
              {/* Add more treatments/procedures if needed */}
              <div className="col-md-4 animate-box">
                <div className="services">
                  <i className="icon-server" />
                  <div className="desc">
                    <h3>Treatment 3</h3>
                    <p>Cataract services, cornea services retina services  these services are also proved and best treated here in our patil eye hospital.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center fh5co-heading animate-box">
            <div className="title-box align center">
              <h4 style={{color:"#E57373", marginTop:"-25px",marginLeft:"-120px"}}><b>Eye Hospital Details</b></h4> 
            </div>
          </div>
        </div>

        {/* Add 6 cards showing details of the eye hospital, arranged in 3 cards per row */}
        <div className="container" style={{marginLeft: "120px",marginRight:"15px"}}>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card" style={{width: "18rem"}}>
                <img src="images/C1.jpg" className="card-img-top" alt="Hospital Image" />
                <div className="card-body">
                  <h5 className="card-title">Appointment Management</h5>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card" style={{width: "18rem"}}>
                <img src="images/C2.jpg" className="card-img-top" alt="Hospital Image" />
                <div className="card-body">
                  <h5 className="card-title">Help Desks</h5>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card" style={{width: "18rem"}}>
                <img src="images/C3.jpg" className="card-img-top" alt="Hospital Image" />
                <div className="card-body">
                  <h5 className="card-title">Outpatient Services</h5>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-4">
              <div className="card" style={{width: "18rem"}}>
                <img src="images/C4.jpg" className="card-img-top" alt="Hospital Image" />
                <div className="card-body">
                  <h5 className="card-title">Opthmalogy Facilities</h5>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="col-md-4">
              <div className="card" style={{width: "18rem"}}>
                <img src="images/C6.jpg" className="card-img-top" alt="Hospital Image" />
                <div className="card-body">
                  <h5 className="card-title">Empanelments</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
