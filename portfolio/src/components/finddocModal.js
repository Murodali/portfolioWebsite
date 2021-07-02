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

                                <h1 className="subtitle">FindaDoc<Icon className="icon" icon={heartbeatIcon} /></h1>

                                <h4>About:</h4>

                                        <p>This a project that I am continuously implementing on my free time. This is the first prototype so far. </p>

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
                                            <p><img  src="./images/reactjs.png"></img>ReactJS,<img  src="./images/node.png"></img> NodeJS, Bootstrap, ReactStrap, Axios, TalendAPI, React, Hooks,SASS, Styled Components, React Bootstrap,GITLAB,GIT,Figma</p>
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