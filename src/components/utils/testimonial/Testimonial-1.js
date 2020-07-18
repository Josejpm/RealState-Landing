import React from "react";
import './testimonial-1.scss'
import quote1 from '../../../assets/quote1.svg'
import profile1 from '../../../assets/Profile01.jpg'

const TestimonialA = () => {
  return (
    <div className="testimonial1-container">
      <div className="text1-container">
          <img src={quote1} alt="quote"/>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
         <img className="profile-pic" src={profile1} alt="Profile"/>
      </div>

      <p className="name" >Kawsar Ahmed</p>
      <p className="position">Ui Ux Designer</p>
        
    </div>
  );
};

export default TestimonialA;
