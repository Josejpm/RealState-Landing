import React from 'react'
import './testimonials.scss'
import TestimonialA from '../utils/testimonial/Testimonial-1'
import TestimonialB from '../utils/testimonial/testimonial-2'



const Testmonials = () => {
    return ( 
        <div className="testimonials-main">
            <h2>Testimonials</h2>
            <p className="description" >What They Are Saying</p>
            <div className="testimonials-container">
                    <TestimonialA/>
                    <div className="testb-container">
                        <TestimonialB/>
                    </div>
                    <TestimonialA/>
            </div>
        </div>
     );
}
 
export default Testmonials;