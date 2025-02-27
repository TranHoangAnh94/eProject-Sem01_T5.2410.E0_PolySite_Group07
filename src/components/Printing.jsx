import React from 'react';
import { Carousel } from 'react-bootstrap'; // Ensure you have react-bootstrap installed
import pri1 from "./image/Our Printing Projects 6.jpg"
import pri2 from "./image/Our Printing Projects 7.jpg"
import pri3 from "./image/Our Printing Projects 8.jpg"

const PrintingSection = () => {
  return (
    <section className="printing-section bg-light py-5">
      <div className="container">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Printing & Labeling</h4>
          <h2 className="display-5 mb-4">Professional Printing Solutions</h2>
          <p className="lead">Advanced printing technology for sharp quality and superior color durability</p>
          <p>
            At Polysite, we understand the importance of high-quality printing and labeling for your products. Our state-of-the-art technology ensures that your branding stands out and meets industry standards.
          </p>
        </div>

        <div className="row g-4">
          {/* Item 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="printing-card">
              <div className="printing-icon mb-3">
                <i className="fas fa-palette fa-3x text-primary"></i>
              </div>
              <h3>In logo & Branding</h3>
              <ul className="printing-features">
                <li>In offset high resolution</li>
                <li>Pantone color accuracy</li>
                <li>UV Effects, 3D Embossing</li>
              </ul>
            </div>
          </div>

          {/* Item 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="printing-card">
              <div className="printing-icon mb-3">
                <i className="fas fa-info-circle fa-3x text-primary"></i>
              </div>
              <h3>Product Information</h3>
              <ul className="printing-features">
                <li>QR Code Barcode</li>
                <li>Nutritional Composition</li>
                <li>Instructions for use</li>
              </ul>
            </div>
          </div>

          {/* Item 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="printing-card">
              <div className="printing-icon mb-3">
                <i className="fas fa-tags fa-3x text-primary"></i>
              </div>
              <h3>Specialized Labels</h3>
              <ul className="printing-features">
                <li>Waterproof</li>
                <li>High Temperature Decal</li>
                <li>Food Safety Label</li>
              </ul>
            </div>
          </div>

          {/* Item 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="printing-card">
              <div className="printing-icon mb-3">
                <i className="fas fa-certificate fa-3x text-primary"></i>
              </div>
              <h3>Quality Standards</h3>
              <ul className="printing-features">
                <li>Non-toxic ink</li>
                <li>FDA certification</li>
                <li>2-year warranty</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel-section py-5">
          <h2 className="text-center mb-4">Our Printing Projects</h2>
          <Carousel id="printingCarousel">
            <Carousel.Item>
              <img
                src={pri1}
                className="d-block w-100"
                alt="Project 1"
              />
              <Carousel.Caption>
                <h5>Project 1</h5>
                <p>Description of project 1.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={pri2}
                className="d-block w-100"
                alt="Project 2"
              />
              <Carousel.Caption>
                <h5>Project 2</h5>
                <p>Description of project 2.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={pri3}
                className="d-block w-100"
                alt="Project 3"
              />
              <Carousel.Caption>
                <h5>Project 3</h5>
                <p>Description of project 3.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PrintingSection;
