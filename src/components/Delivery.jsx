import React from 'react';
import deli1 from "./image/Our Printing Projects 3.jpg"
import deli2 from "./image/Our Printing Projects 9.jpg"
import deli3 from "./image/Our Printing Projects 10.jpg"
import deli4 from "./image/Our Printing Projects 5.jpg"
const DeliverySection = () => {
    return (
        <div>
            {/* Delivery Section */}
            <section className="delivery-section py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-3">
                            <div className="delivery-card">
                                <div className="delivery-icon mb-3">
                                    <i className="fas fa-truck-fast fa-3x text-primary"></i>
                                </div>
                                <h3>Domestic Delivery</h3>
                                <div className="delivery-content">
                                    <ul className="delivery-features">
                                        <li>Express 24h</li>
                                        <li>Standard 48h</li>
                                        <li>Free shipping for orders over 5,000 units</li>
                                    </ul>
                                    <p className="delivery-note">Applicable for all 63 provinces</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="delivery-card">
                                <div className="delivery-icon mb-3">
                                    <i className="fas fa-plane-departure fa-3x text-primary"></i>
                                </div>
                                <h3>International Shipping</h3>
                                <div className="delivery-content">
                                    <ul className="delivery-features">
                                        <li>Air and Sea Freight</li>
                                        <li>Complete customs procedures</li>
                                        <li>100% value insurance</li>
                                    </ul>
                                    <p className="delivery-note">Coverage in 150+ countries</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="delivery-card">
                                <div className="delivery-icon mb-3">
                                    <i className="fas fa-map-marked-alt fa-3x text-primary"></i>
                                </div>
                                <h3>Order Tracking</h3>
                                <div className="delivery-content">
                                    <ul className="delivery-features">
                                        <li>Real-time monitoring</li>
                                        <li>Automatic updates via SMS/Email</li>
                                        <li>24/7 support</li>
                                    </ul>
                                    <p className="delivery-note">Integrated IoT technology</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="delivery-card">
                                <div className="delivery-icon mb-3">
                                    <i className="fas fa-headset fa-3x text-primary"></i>
                                </div>
                                <h3>Professional Support</h3>
                                <div className="delivery-content">
                                    <ul className="delivery-features">
                                        <li>Packaging consultation</li>
                                        <li>Complaint handling within 24h</li>
                                        <li>Regular reporting</li>
                                    </ul>
                                    <p className="delivery-note">Dedicated customer service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="additional-content text-center mt-5">
                        <h4>Why Choose Us?</h4>
                        <p>We prioritize customer satisfaction and ensure timely delivery of all orders. Our team is dedicated to providing the best logistics solutions tailored to your needs.</p>
                        <img src={deli1} alt="Why Choose Us" className="img-fluid" />
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="carousel-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Our Achievements</h2>
                    <div id="achievementCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={deli2} className="d-block w-100" alt="Achievement 1" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Achievement 1</h5>
                                    <p>Details about achievement 1.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={deli3} className="d-block w-100" alt="Achievement 2" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Achievement 2</h5>
                                    <p>Details about achievement 2.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={deli4 } className="d-block w-100" alt="Achievement 3" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Achievement 3</h5>
                                    <p>Details about achievement 3.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#achievementCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#achievementCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeliverySection;
