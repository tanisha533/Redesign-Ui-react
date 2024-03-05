// import React from 'react'
// import {Link} from "react-router-dom";
// import Header from './Header';

// export default function Navbar() {
//   return (
//     <div>
//       <Header/>
//       <body id="home" data-spy="scroll" data-target="#navbar-wd" data-offset="98">
//     <header className="top-header">
//   <nav className="navbar header-nav navbar-expand-lg">
//     <div className="container">
//       <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="image" /></a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
//         <span />
//         <span />
//         <span />
//       </button>
//       <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
//         <ul className="navbar-nav">
//         <nav>
//                 <li><Link className="nav-link active" to="/">Home </Link></li>
//                 <li><Link className="nav-link" to="about">About Us</Link></li>
//                 <li><Link className="nav-link" to="/services">Services</Link></li>
//                 <li><Link className="nav-link" to="/appointment">Appointment</Link></li>
//                 <li><Link className="nav-link" to="/gallery">Gallery</Link></li>
//                 <li><Link className="nav-link" to="/doctor">Doctor</Link></li>
//                 <li><Link className="nav-link" to="/blog">Blog</Link></li>
//                 <li><Link className="nav-link" to="/contact">Contact</Link></li>
           
//         </nav>
//         </ul>
//       </div>
//     </div>
//   </nav>
// </header></body>
// {/* End header */}

//     </div>
//   )
// }

// <nav>
//             <ul>
//                 <li><Link to="/">Home </Link></li>
//                 <li><Link to="about">About</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//             </ul>
//         </nav>


import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Header/>
      <header className="top-header">
        <nav className="navbar header-nav navbar-expand-lg">
          <div className="container-fluid" id='nav'> {/* Changed container to container-fluid */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
              <span />
              <span />
              <span />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
              <ul className="navbar-nav">
                <li><Link className="nav-link active" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/about">About Us</Link></li>
                <li><Link className="nav-link" to="/services">Services</Link></li>
                <li><Link className="nav-link" to="/team">Doctor</Link></li>
                <li><Link className="nav-link" to="/healthinfo">Health-info</Link></li>
                <li><Link className="nav-link" to="/gallery">Gallery</Link></li>
                <li><Link className="nav-link" to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* End header */}
    </div>
  );
} 










