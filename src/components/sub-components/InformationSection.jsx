import React, { useState } from 'react';
import Slider from 'react-slick';
import '../../styles/sub-style/InformationSection.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const InformationSection = () => {
  const [currentVideo, setCurrentVideo] = useState('https://www.youtube.com/embed/HgPt61uRs20');

  const videos = [
    { id: 'HgPt61uRs20', title: 'Organic Farming Secrets' },
    { id: 'lRyXlvIJFWI', title: 'Importance of Organic Farming' },
    { id: 'd7dt8X1GS20', title: 'How Will Nanotechnology Help Farmers?' },
    { id: 'WhOrIUlrnPo', title: 'What is Organic Farming?' },
    { id: 'Qfozqrom7Bk', title: 'CropBioLife ' },
    // Add more video items as needed
  ];

  const handleVideoClick = (videoId) => {
    setCurrentVideo(`https://www.youtube.com/embed/${videoId}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="information-section">
      <h2>Information Section</h2>
      <div className="video-player">
        <iframe
          src={currentVideo}
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video Player"
        ></iframe>
      </div>
      <Slider {...settings} className="video-carousel">
        {videos.map((video) => (
          <div
            key={video.id}
            className="video-item"
            onClick={() => handleVideoClick(video.id)}
          >
            <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt="Video Thumbnail" />
            <p>{video.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InformationSection;
