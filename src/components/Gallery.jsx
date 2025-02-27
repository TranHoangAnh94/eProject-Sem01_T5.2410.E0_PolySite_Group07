import React from "react";
import pri1 from "./image/Our Printing Projects 2.jpg"
import pri2 from "./image/Our Printing Projects 6.jpg"
import pri3 from "./image/Our Printing Projects 7.jpg"
import pri4 from "./image/Our Printing Projects 10.jpg"
import pri5 from "./image/Our Printing Projects 4.jpg"
import pri6 from "./image/Our Printing Projects 5.jpg"
import pri7 from "./image/Our Printing Projects 8.jpg"
import pri8 from "./image/Our Printing Projects 3.jpg"



const GallerySection = () => {
  return (
    <section className="gallery-section bg-light py-5">
      <div className="container">
        <div className="pb-5 wow fadeInUp" data-wow-delay="0.2s">
          <h1 className="gallery-tittle">Gallery</h1>
          <div className="grid-container">

            <div className="grid-item" >
              <a href={pri1}>
                <h4 className="display-5">PolySite - Modern laboratory.</h4>
                <img src={pri2} alt="lab" />
              </a>
            </div>

            <div className="grid-item" >
              <a href={pri3}>
                <h4 className="display-5">PolySite - Quality products from factory to customer.</h4>
                <img src={pri4} alt="Delivery" />
              </a>
            </div>

            <div className="grid-item" >
              <a href={pri5}>
                <h4 className="display-5"> PolySite - Businesses accompany the environment.</h4>
                <img src={pri6} alt="Môi trường 2" />
              </a>
            </div>

            <div className="grid-item" >
              <a href={pri7}>
                <h4 className="display-5"> PolySite - Spread love, join hands for the community!</h4>
                <img src={pri8} alt="Cộng đồng" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
