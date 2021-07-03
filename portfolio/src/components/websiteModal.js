import React, { Component } from "react";
import PropTypes from "prop-types";
import './website.css';
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

                                        <h1 className="subtitle"><span className="logo-letter">M</span>urodali  </h1>

                                        <h4>About:</h4>

                                        <p>I brainstormed about the design ideas and after a couple of sketches I came up with the following design in Figma. The goal was to make an interactive modern colorful website. </p>




                                    </div>

                               

                                    <div className="row">

                                        <p><b>Tools used:</b></p>

                                        <div className="col diagrams">
                                            <p><img src="./images/reactjs.png"></img>ReactJS,<img src="./images/node.png"></img> NodeJS, <img src="./images/bootstrap.png"></img> Bootstrap, <img src="./images/reactstrap.png"></img> HTML5, <img src="./images/axios.png"></img> CSS  <img src="./images/hooks.png"></img> React Hooks <img src="./images/particlejs.png" /> Particle JS</p>
                                        </div>

                                        <div className="col diagrams">
                                            <p> <img src="./images/sass.png"></img> SASS, <img src="./images/styled-components.png"></img>Styled Components,  <img src="./images/reactbootstrap.png"></img>React Bootstrap, <img src="./images/gitlab.png"></img>Gitlab, <img src="./images/git.png"></img>GIT, <img src="./images/figma.png"></img>Figma</p>

                                        </div>
                                    </div>

   

                                    <div className="row">
                                    
                                    <p><b>Check out Github Repository</b></p>
                                    

                                    <div className="gitlab">
                                    <a  href="https://github.com/Murodali/portfolioWebsite.git">https://github.com/Murodali/portfolioWebsite.git</a>
                                    </div>


                                      
         


                                    </div>
                                </div>


                                <div className="f">
                                    <button onClick={this.props.closeWebsite}> Close</button>
                                </div>

                            </div>





                        </section>
                    </div>

                ) : null}
            </React.Fragment>
        );
    }
}