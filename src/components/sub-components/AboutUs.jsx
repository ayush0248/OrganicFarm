// src/components/Fertilizers.jsx
import React from 'react';
import '../../styles/sub-style/AboutUs.css';
import TableSetting from '../../assets/img4.jpg';
import MissionImage from '../../assets/img2.jpg'; // Update path if necessary
import UsImage from '../../assets/img/DI.jpg'; // Update path if necessary

const AboutUs = () => {
  return (
    <div className="about-us-container" id="about">
      <div className="w3-row w3-padding-64">
        <div className="w3-col m6 w3-padding-large w3-hide-small">
          <img src={TableSetting} className="w3-round w3-image w3-opacity-min" alt="Table Setting"/>
        </div>

        <div className="w3-col m6 w3-padding-large">
          <h1 className="w3-center">AboutUs</h1>
          <h5 className="w3-center"></h5>
          <p className="w3-large">
          Welcome to Organic Farm, Where Nature Meets Nurture
At Organic Farm, we believe in the power of nature to nourish the soil and produce healthy, vibrant crops. 
      </p>
          <p className="w3-large w3-text-grey w3-hide-medium">
Our journey began with a simple idea: to provide farmers, gardeners, and home growers with natural, sustainable fertilizers that enrich the earth without harming the environment. </p> <span className="w3-tag w3-light-grey">Read More</span> 
        </div>
      </div>

      {/* New Sections */}
      <div className="w3-row w3-padding-64">
        <div className="w3-col m6 w3-padding-large">
          <h2 className="w3-center">Our Mission</h2>
          <p className="w3-large">
          Our mission is to revolutionize the way we think about agriculture by promoting organic and eco-friendly farming practices. 
          We are committed to offering high-quality fertilizers made from natural ingredients that enhance soil fertility, improve plant growth, and contribute to a sustainable future.
          </p>
        </div>
        <div className="w3-col m6 w3-padding-large w3-hide-small">
          <img src={MissionImage} className="w3-round w3-image w3-opacity-min" alt="Our Mission"/>
        </div>
      </div>

      <div className="w3-row w3-padding-64">
        <div className="w3-col m6 w3-padding-large w3-hide-small">
          <img src={UsImage} className="w3-round w3-image w3-opacity-min" alt="What We Use"/>
        </div>
        <div className="w3-col m6 w3-padding-large">
          <h2 className="w3-center">Why Chose Us?</h2>
          <p className="w3-large">
          - 100% Organic Ingredients: Our fertilizers are crafted from the finest organic materials, ensuring your crops receive the best nutrition without synthetic chemicals or harmful additives.
<p>- Sustainable Practices: We are dedicated to sustainability, from our sourcing of raw materials to our manufacturing processes. Our products not only support healthy plants but also protect and restore the environment.</p>
<p>- Trusted by Farmers: Our fertilizers are trusted by farmers and gardeners across the country. Whether you're growing vegetables, fruits, or flowers, Organic Farm provides the nourishment your plants need to thrive.</p>
<p>- Research-Driven: We combine traditional farming wisdom with modern scientific research to create fertilizers that are both effective and safe. Our products are designed to meet the specific needs of different types of soil and plants.</p>
          </p>
        </div>
      </div>
      
      <hr/>
    </div>
  );
};

export default AboutUs;