import React, { Component } from "react";
import PropTypes from "prop-types";
import './finddoc.css';
import Carousel from 'react-bootstrap/Carousel'

import { Icon, InlineIcon } from '@iconify/react';
import heartbeatIcon from '@iconify-icons/fa/heartbeat';


export default class ModalDoc extends Component {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        dismiss: PropTypes.func.isRequired
    };


    dismissable = () => {
        this.setState({
            isModalOpen: false
        })
    }

    render() {
        const { visible, dismiss } = this.props;
        const showHideClassName = visible ? "modal display-block" : "modal display-none";
        return (
            <React.Fragment>
                {visible ? (

                    <div className={showHideClassName}>

                        <section className="modal-main">

                            <div className="modal-content">

                                <div className="modal-body-doc">


                                    <div className="text-container">

                                        <h1 className="subtitle">🕸️FindaDoc<Icon className="icon" icon={heartbeatIcon} />  </h1>

                                        <h4>About:</h4>

                                        <p>This a project that I am continuously implementing on my free time with a friend. This is the first prototype so far. </p>

                                        <div className="row">
                                            <div className="col">
                                                <p><b>😞 Problem Statement:</b></p>
                                                <p>
                                                    So far in Tajikistan there are no platforms that make it possible to book an appointment with the doctors online. Private hospitals has websites where people can book an appointments with their staff but people go to governmental hospitals since it is cost effective.
                                                </p>
                                            </div>
                                            <div className="col">
                                                <p><b>🙋‍♂️
                                                    The Solution:
                                                </b></p>
                                                <p>
                                                    The solution is to establish a website where patients and doctors can register. Patients can search for doctors accordingly to their needs and arrange appointments. Doctors can approve or deny the appointments requested by the patients.
                                                </p>
                                            </div>

                                        </div>



                                    </div>

                                    <div className="carousel">
                                        <Carousel>
                                            <Carousel.Item interval={1000}>
                                                <img

                                                    src="./images/2.png"
                                                    alt="First slide"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item interval={500}>
                                                <img

                                                    src="./images/2.png"
                                                    alt="Second slide"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img

                                                    src="./images/2.png"
                                                    alt="Third slide"
                                                />

                                            </Carousel.Item>
                                        </Carousel>
                                    </div>

                                    <div className="row">
                                        <p><b>My Role:</b></p>
                                        <p>I handled the front-end development part.</p>
                                        <p><b>Tools used:</b></p>

                                        <div className="col diagrams">
                                            <p><img src="./images/reactjs.png"></img>ReactJS,<img src="./images/node.png"></img> NodeJS, <img src="./images/bootstrap.png"></img> Bootstrap, <img src="./images/reactstrap.png"></img> ReactStrap, <img src="./images/axios.png"></img> Axios, <img src="./images/talend.jpeg"></img> TalendAPI, <img src="./images/hooks.png"></img> React Hooks</p>
                                        </div>

                                        <div className="col diagrams">
                                            <p> <img src="./images/sass.png"></img> SASS, <img src="./images/styled-components.png"></img>Styled Components,  <img src="./images/reactbootstrap.png"></img>React Bootstrap, <img src="./images/gitlab.png"></img>Gitlab, <img src="./images/git.png"></img>GIT, <img src="./images/figma.png"></img>Figma</p>

                                        </div>
                                    </div>

                                    <div className="row-diagrams">

                                        <p><b>Sequence Diagrams:</b></p>

                                            <p>🧍User Sequence Diagram:</p>
                                            <img src="./images/user.png"></img>
                                            <p>👨‍⚕️Doctor Sequence Diagram:</p>
                                            <img classname="second" src="./images/doctor.png"></img>
                                 
                                    </div>

                                    <div className="row">
                                    
                                    <p><b>Check out GitLab Repository</b></p>
                                    

                                    <div className="gitlab">
                                    <a  href="https://gitlab.com/iberdiev/serv/-/tree/Murodali">https://gitlab.com/iberdiev/serv/-/tree/Murodali</a>
                                    </div>

                                        <div className="row">
                                            <div className="text-container">

                                                <h1 className="subtitle">📱FindaDoc<Icon className="icon" icon={heartbeatIcon} />  </h1>

                                                <h4>About:</h4>
                                                <p>This is the android application of the FindaDoc website that I built. This is the first protype.</p>
                                                </div>
                                        </div>

                                        <div className="carousel">
                                        <Carousel>
                                            <Carousel.Item interval={1000}>
                                                <img

                                                    src="./images/app.png"
                                                    alt="First slide"
                                                />

                                            </Carousel.Item>
                                            <Carousel.Item interval={500}>
                                                <img

                                                    src="./images/app2.png"
                                                    alt="Second slide"
                                                />

                                            </Carousel.Item>
           
                                        </Carousel>
                                    </div>

                                    <div className="row">
                                        <p><b>My Role:</b></p>
                                        <p>I handled the front-end development part.</p>
                                        <p><b>Tools used:</b></p>

                                        <div className="col diagrams">
                                            <p><img src="./images/java.png"></img>Java,<img src="./images/sared-pref.png"></img> Shared Prefernces, <img src="./images/volley.png"></img> Volley, <img src="./images/androidst.png"></img> Android Stuidio,   </p>
                                        </div>

                                        <div className="col diagrams">
                                            <p><img src="./images/talend.jpeg"></img> TalendAPI,  <img src="./images/github.png"></img>Github, <img src="./images/git.png"></img>GIT, <img src="./images/figma.png"></img>Figma, <img src="./images/xml.png"></img> XML, </p>

                                        </div>
                                    </div>

                                    <p><b>Check out GitHub Repository</b></p>
                                    

                                    <div className="gitlab">
                                    <a  href="https://github.com/Murodali/SemesterProjectMobAbbDev">https://github.com/Murodali/SemesterProjectMobAbbDev</a>
                                    </div>

                                    </div>
                                </div>


                                <div className="f">
                                    <button onClick={this.props.closeFindDoc}> Close</button>
                                </div>

                            </div>





                        </section>
                    </div>

                ) : null}
            </React.Fragment>
        );
    }
}