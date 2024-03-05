import React from 'react'
import { Link } from 'react-router-dom';

function Toaction() {
  return (
    <div>
     {/* Start Call to action */}
<section className="call-action overlay" data-stellar-background-ratio="0.5">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-12">
        <div className="content">
          <h5 style={{color: '#FAF6ED', backgroundColor:'#E57373'}}><strong>We try to make it faster, easier, and better for you to live healthy & stay connected with us</strong></h5>
          <div className="button">
            <br />
            <Link to="/contact" className="btn">Contact Now</Link>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Toaction
