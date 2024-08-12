import React from 'react';
import '../../styles/sub-style/Services.css';
import bgimage from '../../assets/img/DI.jpg';
import RF from '../../assets/icons/kisansez.png';
import St from '../../assets/icons/St.png';
import CS from '../../assets/icons/CS.png';
import KJ from '../../assets/icons/KJ.png';


const servicesData = [
  {
    title: 'Soil Testing',
    description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    icon: St, // Update with your actual path
    backgroundImage: bgimage, // Update with your actual path
  },
  {
    title: 'Agrinet Call Center',
    description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    icon: CS, // Update with your actual path
    backgroundImage: bgimage, // Update with your actual path
  },
  {
    title: 'Kishi Jivan',
    description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
    icon:KJ, // Update with your actual path
    backgroundImage: bgimage, // Update with your actual path
  },
  // Add more services if needed
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div
            className="service-card"
            key={index}
            style={{ backgroundImage: `url(${service.backgroundImage})` }}
          >
            <div className="service-content">
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="service-link">
                <span className="plus-icon"></span>
                 <span className="read-more">Read More</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;