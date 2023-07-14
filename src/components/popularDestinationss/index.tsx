import Slider from 'react-slick';

// styles
import { Col, Row } from 'react-bootstrap';
import './index.scss';
import { SampleNextArrow,SamplePrevArrow } from '../arrowLeftRight';
import Chennai from '../../assets/images/chennai.jpg';
import Banglore from '../../assets/images/banglore.jpg';
import Kodaikanal from '../../assets/images/kodaikannal.webp';
import Pondicheri from '../../assets/images/pondicherry.jpg';
import Rameswaram from '../../assets/images/RAMESHWARAN.webp';
import Courtallam from '../../assets/images/Courtallam.webp';

const click=()=>{
    window.alert('working');
}

const PopularDestination = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: 'sliderDiv fleetArrow',
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false
                }
            }
        ]
    };
    return (
        <div className="container-fluid my-1">
            <Row>
                <Col lg={12} sm={12}>
                    <div className="center-heading">
                        <h2 className="text-center" style={{ color: "#6bb546" }}>Popular Destinations</h2>
                    </div>
                </Col>
            </Row>
            <Row className="my-1 mt-3 py-4 justify-content-center">
                <Col lg={8} md={8} sm={10} className="mx-1">
                    <div>
                        <Slider {...settings} autoplay={false}>
                            <Row className={"spaceBtm"}>
                                <Col lg={6} sm={12} >
                                    <img style={{ padding: "1px" }} alt="image" className="img-fluid" src={Chennai} />
                                </Col>
                                <Col lg={6} sm={12} className="orderOne">
                                    <h4 className="text-center">CHENNAI</h4>
                                    <p>Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. Marina Beach is a natural urban beach along the Bay of Bengal. second largest in the world and also the most crowded beach in India
                                        with almost 30,000 visitors a day. Government Museum is the second oldest museum in the country. The magnificent Marundeeswarar Temple, Vandalur Zoo, Senthamizh poonga, Mahabalipuram are the best tourist spots.</p>
                                </Col>
                            </Row>
                            <Row className={"spaceBtm"}>
                                <Col lg={6} sm={12} className="orderOne">
                                    <h4 className="text-center">BANGALORE</h4>
                                    <p>Bangalore is also known as the silicon valley of India. The center of India's high-tech industry, the city is also known for its parks and nightlife. The name brings up visions of serene lakes, age-old trees and beautiful gardens,
                                        and cool showers on a hot summer’s afternoon! In terms of cleanliness, Bangalore ranks 12th in India. Once called the "Garden City of India" and the "Pensioner's Paradise", these epithets no longer apply to Bangalore, which
                                        is now a large, cosmopolitan city with diminishing green spaces and a large working population.</p>
                                </Col>
                                <Col lg={6} sm={12}>
                                    <img style={{ padding: "1px" }} alt="image" width="100%" src={Banglore} />
                                </Col>
                            </Row>
                            <Row className={"spaceBtm"}>
                                <Col lg={6} sm={12}>
                                    <img style={{ padding: "1px" }} alt="image" width="100%" src={Kodaikanal} />
                                </Col>
                                <Col lg={6} sm={12} className="orderOne">
                                    <h4 className="text-center">KODAIKANNAL</h4>
                                    <p>Kodaikanal is a hill town in the southern Indian state of Tamil Nadu. It’s set in an area of granite cliffs, forested valleys, lakes, waterfalls, and grassy hills. The city came into existence because the Kodaikanal Weather
                                        was the best retreat from the sultry summer for the British who needed cooler weather. With the Western Ghats’ Palani Hills forming the ideal cloud-capped peaks and the rolling green valley being a salve for sore eyes,
                                        no wonder Kodaikanal is often considered a gift from the gods.</p>
                                </Col>
                            </Row>
                            <Row className={"spaceBtm"}>
                                <Col lg={6} sm={12} className="orderOne">
                                    <h4 className="text-center">PONDICHERRY</h4>
                                    <p>For seekers of spirituality, Pondicherry is known for Aurobindo Ashram and Auroville attracting thousands of tourists to explore this beautiful city. For nature lovers too, Pondicherry is a serene retreat replete with various
                                        beaches and lakes that takes the breath away of the tourists on the first glimpse. Scuba Diving, Paradise Beach, Promenade, Serenity Beach, Arikamedu, Auroville Beach and Boathouse are the best spots in Pondicherry.</p>
                                </Col>
                                <Col lg={6} sm={12}>
                                    <img style={{ padding: "1px" }} alt="image" width="100%" src={Pondicheri} />
                                </Col>
                            </Row>
                            <Row className={"spaceBtm"}>
                                <Col lg={6} sm={12}>
                                    <img style={{ padding: "1px" }} alt="image" width="100%" src={Rameswaram} />
                                </Col>
                                <Col lg={6} sm={12} className="orderOne">
                                    <h4 className="text-center">RAMESWARAM</h4>
                                    <p>Rameswaram is a town on Pamban Island, in the southeast Indian state of Tamil Nadu. It’s known for Ramanathaswamy Temple. Rameshwaram Temple is renowned for being a part of one of the twelve Jyotirlingas (lingam of light) of
                                        Lord Shiva in India. The temple is also famous for the fact that it's the southernmost 'jyotirlinga' of India which makes it one of the top religious places in India. ... Rameshwaram can be visited any time of the year.
                                        House of kalam, Dhanush Kodi and Aryaman beach are the best locations to visit.</p>
                                </Col>
                            </Row>
                            <Row className={"spaceBtm3"}>
                                <Col lg={6} sm={12} className="orderOne">
                                    <h4 className="text-center">COURTALLAM</h4>
                                    <p>Courtallam or Kuttalam, Spa of South India. The falls carry a good amount of water only when there is a rain on the hills. The season begins from June of every year till September. The South West Monsoon brings in the cold
                                        breeze with mild temperature. Five falls, old coutrallam falls, Tiger falls, Main falls and Chitraruvi are the best and famous falls to bath.</p>
                                </Col>
                                <Col lg={6} sm={12}>
                                    <img style={{ padding: "1px" }} alt="image" width="100%" src={Courtallam} />
                                </Col>
                            </Row>
                        </Slider>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default PopularDestination;