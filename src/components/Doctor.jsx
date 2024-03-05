import React from 'react';
import Footer from './Footer';

export default function Doctor() {
  return (
    <div>
      {/* Start Doctor Profile */}
      <div className="container">
        <div className="row">
          {/* Doctor Profile */}
          <div className="col-md-12 text-center">
            <div className="title-box">
              <br /> <br />
              <h4 style={{ color: "#E57373", marginTop: "-25px" }}><b>DOCTOR</b></h4>
            </div>
            <div className="doctor-profile">
              <div className="profile-pic">
                <img src="images/doctorr.jpeg" alt="Doctor" className="rounded-circle" style={{ width: '200px', height: '200px' }} />
              </div>
              <h3 className="title">Dr. Santosh Patil</h3>
              <span className="post">Founder & Director- Patil Eye Hospital MBBS, DOMS, FGO</span>
              <p>Cataract Surgery, Glaucoma Management, Squint Management</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Doctor Profile */}

      {/* Container with background color */}
      <div className="container" style={{ backgroundColor: '#dddddd' }}>
        <div className="row">
          <div className="col-md-6">
            <div className="about-box" style={{ borderColor:"rgb(249, 111, 111)", padding: '15px', borderRadius: '10px', marginTop: '20px', backgroundColor: "#ffff" }}>
              <h4>About</h4>
              <p>Dr. Santosh Patil, Founder- Director of Patil Eye hospital is amongst the leading eye specialist in Bhosari Pune.
                <p>He is specialized in cataract management, Glaucoma Management, squint management and
                  various other eye related disorders.</p>

                <p>A highly trained & experienced doctor who has completed MBBS, DOMS and FGO, Dr. Santosh Patil has over 21 years of experience as a practicing eye doctor in Ophthalmology.
                </p>
                <p>Dr. Patil's enthusiasm has empowered him to maximize the use of medical science and technology as a way to provide better and improved patient care.</p>
                <p>Dr. Santosh Patil believes in providing high quality information to patients about their eye health condition & its management.
                </p>
                <p>Being amongst the best Ophthalmologist in Bhosari Pune, Dr. Santosh Patil constantly strives to provide the latest & the best medical services in the field of Ophthalmology and eye care.
                </p>
                Explore this official website of Patil Eye Hospital Clinic to know more about the doctor, facilities & services or to get credible health information, ask health questions, consult online or book instant appointment with Dr. Santosh Patil.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="doctor-info">
              <div className="about-doctor">
                <div className="about-box" style={{ padding: '15px', borderRadius: '10px', marginBottom: '15px', backgroundColor: 'rgb(249, 111, 111)',marginTop:'20px' }}>
                  <b>BEEN IN PRACTICE FOR:</b>
                  <p>Been in practice for 23 years</p>
                </div>
                <div className="about-box" style={{padding: '15px', borderRadius: '10px', marginBottom: '15px', backgroundColor:  'rgb(249, 111, 111)' }}>
                  <p>
                    <b>Qualifications:</b><br />
                    MBBS, DOMS, FGO
                  </p>
                </div>
                <div className="about-box" style={{ padding: '15px', borderRadius: '10px', marginBottom: '15px', backgroundColor:  'rgb(249, 111, 111)' }}>
                  <b>Specializations:</b><br />
                  Cataract Surgery, Glaucoma Management, Squint Management
                </div>
              </div>
              <div className="about-box" style={{  padding: '15px', borderRadius: '10px', marginBottom: '15px', backgroundColor:  'rgb(249, 111, 111)' }}>
                <div className="testimonials">
                  <h4>Testimonials</h4>
                  <div className="testimonial-list">
                    <div className="testimonial">
                      <p>Good</p>
                      <p><b>Santosh Burde</b></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-box" style={{ padding: '15px', borderRadius: '10px', marginBottom: '15px', backgroundColor:  'rgb(249, 111, 111)' }}>
                <div className="languages-known">
                  <h4>Languages Known</h4>
                  <p>English, Hindi, Marathi</p>
                </div>
              </div>
              <div className="about-box" style={{ padding: '15px', borderRadius: '10px', marginBottom: '15px', backgroundColor:  'rgb(249, 111, 111)' }}>
                <div className="recommendations">
                  <h4>Recommendations</h4>
                  <p>Medical Expertise (1)</p>
                  <p>Listens & Gives Time (1)</p>
                  <p>Compassionate (1)</p>
                  <p>Bed/chairside Manners (1)</p>
                  <p>Recommend</p>
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
