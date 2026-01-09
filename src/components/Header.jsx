import React, { useState } from 'react';
import Modal from 'react-modal';
import "bootstrap/dist/css/bootstrap.min.css";


const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.07)' 
  },
  content: {
    top: '350px',
    left: '65%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    padding: '40px',
    maxWidth: '390px',
    width: '100%',
    borderRadius:'10px',
    backgroundColor: '#fff',
    borderColor:'#E57373',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '9px',
    cursor: 'pointer'
  }
};

const AppointmentModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    department: 'Choose Department',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customModalStyles}>
      <button className="close-button" style={customModalStyles.closeButton} onClick={onRequestClose}>
        &times;
      </button>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required pattern="[A-Za-z\s]+" title="Alphabets and spaces only" style={{ marginLeft: '10px' }} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ marginLeft: '10px' }} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required style={{ marginLeft: '10px' }}  />
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <select id="time" name="time" value={formData.time} onChange={handleChange} required style={{ marginLeft: '10px' }} >
            <option value="8:00 to 9:00">8:00 to 9:00</option>
            <option value="9:00 to 10:00">9:00 to 10:00</option>
            <option value="10:00 to 1:00">10:00 to 1:00</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select id="department" name="department" value={formData.department} onChange={handleChange} required style={{ marginLeft: '10px' }} >
            <option value="Choose Department">Choose Department</option>
            <option value="Gynacology">Gynacology</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Orthology">Orthology</option>
            <option value="Anesthesiology">Anesthesiology</option>
            <option value="Ayurvedic">Ayurvedic</option>
          </select>
        </div>
        <button type="submit" style={{ backgroundColor: '#F48124', borderColor: '#F48124', color:'#ffff'}}>Submit</button>
      </form>
    </Modal>
  );
};

const WorkingHoursModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customModalStyles}>
      <button className="close-button" style={customModalStyles.closeButton} onClick={onRequestClose}>
        &times;
      </button>
      <h2><span role="img" aria-label="Clock" style={{ color: '#E57373' }}>&#128336;</span> Working Hours</h2>
      <div>
        <p>Monday - Saturday</p>
        <p>10:00 AM - 9:00 PM</p>
      </div>
    </Modal>
  );
};

export default function Appointment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWorkingHoursModalOpen, setIsWorkingHoursModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openWorkingHoursModal = () => {
    setIsWorkingHoursModalOpen(true);
  };

  const closeWorkingHoursModal = () => {
    setIsWorkingHoursModalOpen(false);
  };

  return (
    <div>
      <div className="fluid-container" id="head">
        <div className="row align-items-center">
          <div className="col-auto">
            <img src="images/logo.png" alt="image" style={{ maxWidth: '80px', maxHeight: '85.7px', marginLeft: '22px', marginTop: '10px' }} />
          </div>
          <div className="col-auto ml-auto" style={{ marginRight: '-25px' }}>
            <div className="left-top">
              <a href="#" className="appointment-btn" onClick={openModal}>
                <i className="fa fa-calendar-check-o" style={{ color: '#E57373', backgroundColor: 'white' }} aria-hidden="true"></i>
                <span>Book Appointment Now</span>
              </a>
            </div>
          </div>
          <div className="col-auto" style={{ marginRight: '-25px' }}>
            <div className="mail-b">
              <a href="#" className="mail-btn" onClick={openWorkingHoursModal}>
                <span role="img" aria-label="Clock" style={{ color: '#E57373' }}>&#128336;</span>
                <span>Working Hours</span>
              </a>
            </div>
          </div>
          <div className="col-auto" style={{ marginRight: '-7px' }}>
            <div className="phone-number">
              <a href="#" className="phone-btn">
                <i className="fa fa-phone-square" style={{ color: '#E57373', backgroundColor: 'white' }} aria-hidden="true"></i>
                <span>+91 7447446460</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={isModalOpen ? "overlay" : ""}></div>
      <AppointmentModal isOpen={isModalOpen} onRequestClose={closeModal} />
      <div className={isWorkingHoursModalOpen ? "overlay" : ""}></div>
      <WorkingHoursModal isOpen={isWorkingHoursModalOpen} onRequestClose={closeWorkingHoursModal} />
    </div>
  );
}



// import React from 'react'

// function header() {
//   return (
//     <div>
//      <nav className="navbar bg-body-tertiary">
//   <div className="container-fluid h-20">
//     <img src='images/logo.png' className="img-fluid" alt="Logo" style={{ height: "50px" }}></img>
//     <form className="d-flex" role="search">
//       <button className="btn btn-outline-custom me-2" style={{ borderColor: 'rgb(229, 115, 115)', color: 'rgb(229, 115, 115)' }}>Book Appointment</button>
//       <i className="fa fa-calendar-check-o" style={{ color: '#E57373', backgroundColor: 'white' }} aria-hidden="true"></i>

//       <button className="btn btn-outline-custom me-2" style={{ borderColor: 'rgb(229, 115, 115)', color: 'rgb(229, 115, 115)' }}>Book Appointment</button>
//       <button className="btn btn-outline-custom me-2" style={{ borderColor: 'rgb(229, 115, 115)', color: 'rgb(229, 115, 115)' }}>Book Appointment</button>
//     </form>
//   </div>
// </nav>




//     </div>
//   )
// }

// export default header
