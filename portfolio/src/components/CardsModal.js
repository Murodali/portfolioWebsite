import React, { Component } from "react";
import PropTypes from "prop-types";
import './modal.css';


export default class Modal extends Component {
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

                                <div className="modal-body">




                                    <div className="text-featured">
                                        <p className="subtitle ">Thank you!</p>

                                        <p className="featured-desc ">I will get back to you as soon as possible.</p>

                                    </div>


                                </div>

                                <div className="f">
                                    <button onClick={this.props.closeDescription}> Close</button>
                                </div>


                            </div>
                        </section>
                    </div>

                ) : null}
            </React.Fragment>
        );
    }
}