// import React from 'react';

// function Footer() {
//   return (
//     <div>
//       <footer className="bg-body-tertiary text-center text-lg-start container-fluid" style={{ backgroundColor: 'rgb(249, 111, 111)' }}>

//         <div className="container-fluid" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' , marginTop:"20px",marginLeft:"30px"}}>
//           <div className="row">
//             <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
//               <h5 className="text-uppercase" style={{marginTop:"40px",color:"rgb(249, 111, 111)"}}>Patil Eye Hospital</h5>
//               <p>In Bhosari is a NABH Accredited (Entry Level) hospital offering best and affordable eye treatment to patient across Pune, Maharashtra.</p>
//               <p><strong>Work Hours:</strong> Mon-Sat 10:00 a.m. to 9:00 p.m.</p>
//               <p>Our team of experienced and compassionate doctors is here to provide you with the best possible care, every step of the way.</p>
//             </div>
//             <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
//               <h5 className="text-uppercase" style={{marginTop:"40px",color:"rgb(249, 111, 111)"}}>Contact Info</h5>
//               <p><strong>Phone:</strong> +917447446460, +918888415465, +917447446460</p>
//               <p><strong>Email:</strong> patileyehospital2004@gmail.com</p>
//               <p><strong>Address:</strong> FIRST FLOOR, JAI GANESH SAMARAJYA, C Wing, Pune - Nashik Hwy, PANJARPOL, Bhosari, Pune - 411039, Maharashtra, India</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//       <div className="text-center p-3" style={{ backgroundColor: 'rgb(249, 111, 111)' }}>
//         © 2024 Copyright:
//         <a className="text-body" href="">Redesign Patil Eye hospital </a>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import React from 'react';

function Footer() {
  return (
    <div>
      <br></br>

      {/* Footer Start */}
      <div className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-4">
              <div className="row g-2">
                <div className="col-6">
                  <img className="img-fluid rounded" src="images/logo.png" alt="Logo" style={{width:"100px",height:'100px'}}/>
                  
                </div>
                <div className="col-8" style={{ color: "#fff" }}>
                  <br />
                  <p>PATIL EYE HOSPITAL<br />In Bhosari is a NABH Accredited (Entry Level) hospital offering best and affordable eye treatment to patient across Pune, Maharashtra.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="row g-2">
                <h5 className="text-white mb-4" style={{ color: "#ffb" }}>CONTACT INFO</h5>
                <div className="col-12" style={{ color: "#fff" }}>
                  <br /> <br /> 
                  <p>Phone:<br />+917447446460, +918888415465, +917447446460</p>
                  <p>Email: patileyehospital2004@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="row g-2">
                <h5 className="text-white mb-4" style={{ color: "#ffb" }}>Address:</h5 >
                <div className="col-12" style={{ color: "#fff" }}>
                  <br /><br />
                  <br />
                  <p>FIRST FLOOR, JAI GANESH SAMARAJYA, C Wing, Pune - Nashik Hwy, PANJARPOL, Bhosari, Pune - 411039, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center align-center p-3" style={{ color: "#fff",marginLeft:"500px",color:"#ffb" }}>
          <div className="container">
            <div className="copyright">
              <div className="row">
                © 2024 Copyright:
                Redesign Patil Eye hospital
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

