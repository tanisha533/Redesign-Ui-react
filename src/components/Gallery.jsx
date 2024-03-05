import React from 'react'

export default function Gallery() {
  return (
    <div>
     {/* Start Gallery */}
<div id="gallery" className="gallery-box">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="title-box">
        <h4 style={{color:"#E57373", marginTop:"-15px"}}><b>Gallery</b></h4> 
      <p style={{fontSize:"18px", backgroundColor:"#ffb",marginTop:"10px"}}> <strong>GET THE BEST CARE & ATTENTION YOU DESERVE</strong></p>
        </div>
      </div>
    </div>
    <div className="popup-gallery row clearfix">
      <div className="col-md-3 col-sm-6">
        <div className="box-gallery">
          <img src="images/gallery-01.jpg" alt />
          <div className="box-content">	
            <h3 className="title">Surgical Suite</h3>
            <ul className="icon">
              <li><a href="images/gallery-01.jpg"><i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="box-gallery">
          <img src="images/gallery-02.jpeg" alt />
          <div className="box-content">
            <h3 className="title">Eye Examination Room</h3>
            <ul className="icon">
              <li><a href="images/gallery-02.jpeg"><i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">					
        <div className="box-gallery">
          <img src="images/gallery-03.jpeg" alt />
          <div className="box-content">	
          <h3 className="title">Counter section</h3>						
            <ul className="icon">
              <li><a href="images/gallery-03.jpeg"><i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="box-gallery">
          <img src="images/gallery-01.jpeg" alt />
          <div className="box-content">	
            <h3 className="title">Recovery Room</h3>
            <ul className="icon">
              <li><a href="images/gallery-01.jpeg"><i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="box-gallery">
          <img src="images/gallery-05.jpeg" alt />
          <div className="box-content">							
            <h3 className="title">Waiting Section</h3>
            <ul className="icon">
              <li><a href="images/gallery-05.jpeg"><i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">					
        <div className="box-gallery">
          <img src="images/gallery-01.jpg" alt />
          <div className="box-content">
            <h3 className="title">Surgical Suite</h3>
            <ul className="icon">
              <li><a href="images/gallery-01.jpg"><i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="box-gallery">
          <img src="images/gallery-07.jpeg" alt />
          <div className="box-content">
            <h3 className="title">Bed for surgery</h3>
            <ul className="icon">
              <li><a href="images/gallery-07.jpeg"><i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="box-gallery">
          <img src="images/gallery-08.jpg" alt />
          <div className="box-content">		
            <h3 className="title">Optical Dispensary</h3>
            <ul className="icon">
              <li><a href="images/gallery-08.jpg"><i className="fa fa-picture-o" aria-hidden="true" /></a></li>								
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* End Gallery */}

    </div>
  )
}
