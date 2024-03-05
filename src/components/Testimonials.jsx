import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Testimonials() {
  const [testimonialsIndex, setTestimonialsIndex] = useState(0);

  const testimonials = [
    [
      { image: "images/timg.jpg", alt: "Testimonial 1", review: "Excellent care, highly recommended.", rating: 5 },
      { image: "images/t8img.jpeg", alt: "Testimonial 2", review: "Modern facilities, friendly staff.", rating: 4 },
      { image: "images/t2img.jpg", alt: "Testimonial 3", review: "Knowledgeable doctors, effective treatment.", rating: 3.5 },
      { image: "images/t3img.jpeg", alt: "Testimonial 4", review: "Outstanding service, top-notch care.", rating: 5 }
    ],
    [
      { image: "images/t9img.jpeg", alt: "Testimonial 5", review: "Skilled doctors, grateful patient.", rating: 4 },
      { image: "images/t5img.jpg", alt: "Testimonial 6", review: "Wonderful experience, effective treatment.", rating: 5 },
      { image: "images/t6img.jpg", alt: "Testimonial 7", review: "Extremely satisfied, highly recommended.", rating: 5 },
      { image: "images/t7img.jpeg", alt: "Testimonial 8", review: "Excellent care, thankful patient.", rating: 3 }
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialsIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-4">
      <h2 style={{textAlign:"center", color: '#E57373'}}>Testimonials</h2>
      <p style={{textAlign:"center"}}>Here are some testimonials from our satisfied customers:</p>
      <br />
      <div className="row">
        {testimonials[testimonialsIndex].map((testimonial, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              <img src={testimonial.image} className="card-img-top" alt={testimonial.alt} />
              <div className="card-body">
                <p className="card-text">{testimonial.review}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i} className="text-warning">&#9733;</span>
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                      <span key={i + testimonial.rating} className="text-secondary">&#9733;</span>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
