import './index.scss';
import Transportation from '../../assets/images/transportation.png';
import ManPng from '../../assets/images/man.png';
import TechnologyPng from '../../assets/images/technology.png';
import PricePng from '../../assets/images/price.png';

const WhyChooseSection = () => (
    <section className="py-2" id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="center-heading my-5">
                        <h2 className="text-center mt-5" style={{ color: "#6bb546" }}>Why Choose Us?</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-3 justify-content-center">
                <div className="col-lg-3 col-sm-6 col-xs-8 col-10">
                    <a className="services-small-item">
                        <div className="icon">
                        <img src={PricePng} className='img-fluid' alt="premium" />
                        </div>
                        <h5 className="services-title my-5 text-decoration-none">Best Price</h5>
                        <p style={{ height: "75px" }}> We reward you with lower rates the longer you rent a car from us and at best price.</p>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-8 col-10">
                    <a className="services-small-item">
                        <div className="icon">
                        <img src={TechnologyPng} className='img-fluid' alt="premium" />
                        </div>
                        <h5 className="services-title my-5">24*7 Support</h5>
                        <p style={{ height: "75px" }}> An immediate free transfer service to your residence and replacement car is available.</p>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-8 col-10">
                    <a className="services-small-item">
                        <div className="icon">
                        <img src={ManPng} className='img-fluid' alt="premium" />
                        </div>
                        <h5 className="services-title my-5">Friendly Drivers</h5>
                        <p style={{ height: "75px" }}>Our friendly and knowledgeable drivers will take care of you with the complete journey.</p>
                    </a>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-8 col-10">
                    <a className="services-small-item">
                        <div className="icon">
                            <img src={Transportation} className='img-fluid' alt="premium" />
                        </div>
                        <h5 className="services-title my-5">Premium Cabs</h5>
                        <p style={{ height: "75px" }}>All our cars and brand new and regularly audited cars.</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
   
);

export default WhyChooseSection;