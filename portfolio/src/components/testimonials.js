import React, { Component } from 'react';
import '../css/styles.css';
import Carousel from 'react-bootstrap/Carousel';
import Fade from 'react-reveal/Fade';

export default class testimonials extends Component {
    render() {
        return (
            <div className="main-test">

                <img src="images/people1.svg" className="test"></img>


                <div class=" testimonials   ">


                    <Fade left>

                        <div className="text-featured">
                            <p className="subtitle ">Testimonials</p>

                            <p className="featured-desc ">People I've worked with have said some nice things...</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="people">
                            <Carousel className="k">
                                <Carousel.Item interval={1500}>
                                    <div className="avatar">
                                        <img src="images/seo.png"></img>
                                    </div>

                                    <div className="info">
                                        <h3>Umed Babakhanov</h3>
                                        <p>CEO of ASIA PLUS, Tajkistan</p>
                                        <p>Murodali did an excelent job for out company</p>
                                    </div>

                                </Carousel.Item>

                                <Carousel.Item interval={500}>
                                    <div className="avatar">
                                        <img src="images/seo.png"></img>
                                    </div>

                                    <div className="info">
                                        <h3>Umed Babakhanov</h3>
                                        <p>CEO of ASIA PLUS, Tajkistan</p>
                                        <p>Murodali did an excelent job for out company</p>
                                    </div>

                                </Carousel.Item>


                            </Carousel>

                        </div>
                    </Fade>

                </div>


            </div>
        )
    }
}


