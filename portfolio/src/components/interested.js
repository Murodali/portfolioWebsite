import React, { Component } from 'react'
import '../css/styles.css';
import Carousel from 'react-bootstrap/Carousel';

export default class interested extends Component {
    render() {
        return (
            <div >         
       
                    <div className="interested">
                <div className="interested-row">


                    <div className="text-featured">
                        <p className="subtitle ">Start a Project</p>

                    </div>


                    <div className="project-text">

                        <p className="subtitle ">Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>

                    </div>
                    <div className="project-button ">

                       <a href="#contact"> <button type="submit" class="btn  con-btn">Let's do this</button></a>

                    </div>
                </div>
       
            </div>

    </div>





            
        )
    }
}
