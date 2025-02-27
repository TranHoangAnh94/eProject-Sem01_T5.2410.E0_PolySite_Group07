import React from 'react';
import cus1 from "./image/Our Printing Projects 1.jpg"
import cus2 from "./image/Our Printing Projects 2.jpg"
import cus3 from "./image/Our Printing Projects 3.jpg"
import cus4 from "./image/news2.jpg"
import cus5 from "./image/2.jpg"
import cus6 from "./image/PlasticBottle4.jpg"
import cus7 from "./image/Our Printing Projects 4.jpg"
import cus8 from "./image/Our Printing Projects 5.jpg"
const CustomBottlesSection = () => {
  return (
    <>
      {/* Carousel */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cus1} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Polysite</h5>
              <p>Explore our customized products.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cus2} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Variety of products</h5>
              <p>We offer a wide range of plastic bottles.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cus3} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Quality Assurance</h5>
              <p>We are committed to product quality.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid feature bg-light py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
            <h4 className="text-primary">Custom Plastic Bottles</h4>
            <h1 className="display-4 mb-4">Design Your Personalized Bottles</h1>
            <p className="mb-0">
              First things first. When you're looking for a custom bottle, the first step naturally is going to be the design
              stage. For custom-made bottles, it is important to consider the shape, size, dispensing mechanism, and printing
              technique. At Polysite, we offer numerous dispensing mechanisms and customization techniques, each of which will be
              covered in more detail below. We advise using our in-stock bottles for customization, however, if you're looking at a
              custom size/shape, this is possible as well. For custom bottles, the MOQ ranges from 1,500 to 20,000 units -
              depending on the complexity of the design. If you choose to order your personalized bottles from us, you will naturally
              receive a sample of your custom bottle by mail to inspect before starting the production of your wholesale order.
            </p>
          </div>

          <section className="services-section">
            <div className="services-grid">
              <div className="service-card">
                <img src={cus4} className="service-image" />
                <div className="service-content">
                  <h3>Food & Beverage Bottles</h3>
                  <p>
                    We create bottles for various food and beverage products, including condiments, sauces, spreads, snacks, spices,
                    and more.
                  </p>
                </div>
              </div>

              <div className="service-card">
                <img src={cus5} alt="Printing Service" className="service-image" />
                <div className="service-content">
                  <h3>Health and Beauty Bottles</h3>
                  <p>
                    We produce bottles for healthcare products such as vitamins, supplements, and over-the-counter (OTC) and
                    prescription medications. We also make bottles for personal care items such as body wash, shampoo, lotion, oil,
                    and other skin and hair care products.
                  </p>
                </div>
              </div>

              <div className="service-card">
                <img src={cus6} alt="Accessories" className="service-image" />
                <div className="service-content">
                  <h3>Industrial Consumable Bottles</h3>
                  <p>
                    We design and manufacture industrial consumable bottles that are durable and eye-catching. They are used for
                    products such as cleaners, automotive oil, and more.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Additional Content Section */}
      <section className="additional-content">
        <div className="container">
          <h2 className="text-center my-4">Why Choose Us?</h2>
          <p>
            We offer customized packaging solutions with top quality and excellent customer service. Let's discover the benefits of
            working with us!
          </p>
          <ul>
            <li>Superior product quality</li>
            <li>Fast delivery time</li>
            <li>Competitive Pricing</li>
            <li>Dedicated customer service</li>
          </ul>
          <div className="row">
            <div className="col-md-6">
              <img src={cus7} alt="Chất lượng sản phẩm" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <img src={cus8} alt="Giao hàng nhanh chóng" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomBottlesSection;
