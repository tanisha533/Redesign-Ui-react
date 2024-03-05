import React, { useState } from 'react';
import Footer from './Footer';

function HealthInfo() {
    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);

    const handleReadMore = () => {
        setExpanded(!expanded);
    };

    const handleReadMore2 = () => {
        setExpanded2(!expanded2);
    };

    const handleReadMore3 = () => {
        setExpanded3(!expanded3);
    };

    return (
        <div>
            {/* Start Blog */}
            <div id="blog" className="blog-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-box">
                                <h4 style={{ color: "#E57373", marginTop: "-25px" }}><b>Health-Info</b></h4>
                                <p style={{ fontSize: "18px", marginTop: "10px" }}> <b>Welcome to Patil Eye Hospital
                                    Health Information Repository
                                    Find reliable health information</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-inner">
                                <div className="blog-img">
                                    <img className="img-fluid" src="images/blog-img-01.jpg" alt="" />
                                </div>
                                <div className="item-meta">
                                    <span className="dti"><b>Trachoma</b></span>
                                </div>
                                <p>Trachoma is a type of bacterial eye infection. The condition is a leading cause of preventable blindness worldwide, although it's rare in developed countries such as the UK. ..</p>

                                {expanded && (
                                    <p>Trachoma usually first affects young children, causing mild irritation in the eyes and a discharge of pus and/or mucus.</p>
                                )}
                                <a className="new-btn-d br-2" href="#" onClick={handleReadMore}>
                                    {expanded ? 'Read Less' : 'Read More'}
                                    <i className="fa fa-angle-double-right" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-inner">
                                <div className="blog-img">
                                    <img className="img-fluid" src="images/blog-img-02.jpg" alt />
                                </div>
                                <div className="item-meta">
                                    <span className="dti"> <b>Nail patella syndrome</b> </span>
                                </div>
                                <p>Nail patella syndrome is a rare genetic condition</p>
                                {expanded && (
                                    <p>that can cause problems with the nails, bones, kidneys and eyes. It's thought to affect at least one in 50,000 people.</p>
                                )}
                                <a className="new-btn-d br-2" href="#" onClick={handleReadMore}>
                                    {expanded ? 'Read Less' : 'Read More'}
                                    <i className="fa fa-angle-double-right" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-inner">
                                <div className="blog-img">
                                    <img className="img-fluid" src="images/download.jpeg" alt />
                                </div>
                                <div className="item-meta">
                                    <span className="dti"> <b>Eye tests for children</b> </span>
                                </div>
                                <p>Routine eye tests are offered to newborn babies and children to identify any problems early on in their development.</p>
                                {expanded && (
                                    <p>Although serious vision problems during childhood are rare, early testing ensures that any problems are picked up and managed as early as possible</p>
                                )}
                                <a className="new-btn-d br-2" href="#" onClick={handleReadMore}>
                                    {expanded ? 'Read Less' : 'Read More'}
                                    <i className="fa fa-angle-double-right" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HealthInfo;
