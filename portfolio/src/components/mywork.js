import '../css/styles.css';
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import ReactParticles from 'react-particles-js';
import particlesConfig from './Particles (2)';
import { timers } from 'jquery';
import Web from './websiteModal';
import  { useState } from 'react'
import { Component } from 'react';
import Doc from './finddocModal';



export default class mywork extends Component {

	state ={
		isFindDoc:false,
		isWebsite:false,
	
	  }
	



	openFindDoc = ()=>{
		this.setState({isFindDoc:true})
		
	}

	closeFindDoc =()=> {
		this.setState({
		  isFindDoc: false})
		
	  }

	  openWebsite = ()=>{
		this.setState({isWebsite:true})
		
	}

	closeWebsite =()=> {
		this.setState({
		  isWebsite: false})
		
	  }



	render(){
		return (

			<div>
			
			<div className=" work" id="mywork">
	
		
	<Particle> 
				<div className="work-text">
	
					<div className="text-work">
						<p className="subtitle ">My Projects</p>
					</div>
	
				</div>
				
	
			
				<div className="work-row">
			
			
					<ul>
						<Fade left> 
						<li>
							<img src="images/finddoc.png"></img>
							<div class="info">
								<h1>FindaDoc Website</h1>
								<p>This is FindaDoc website and android mobile application</p>
								<button onClick={this.openFindDoc}> Learn More</button>
							</div>
						</li>
						</Fade>
	
						<Fade right>   
	
						<li>
							<img src="images/website.png"></img>
							<div class="info">
								<h1>Murodali</h1>
								<p>This is FindaDoc website and android mobile application</p>
								<button onClick={this.openWebsite}> Learn More</button>
							</div>
						</li>
	
						</Fade>


	
						{/* <Fade left>  
	
						<li>
							<img src="images/rideapp.png"></img>
							<div class="info">
								<h1>GetaRide Mobile Application</h1>
								<p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
								<button> Learn More</button>
							</div>
						</li>
	
						</Fade>
	
						<Fade right> 
	
						<li>
							<img src="images/rideweb.png"></img>
							<div class="info">
								<h1>GetaRide Website</h1>
								<p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
								<button> Learn More</button>
							</div>
						</li>
	
						</Fade>
	
						<Fade left>  
						<li>
							<img src="images/finddoc.png"></img>
							<div class="info">
								<h1>FindaDoc</h1>
								<p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
								<button> Learn More</button>
							</div>
						</li>
	
						</Fade>
	
						<Fade right> 
	
						<li>
							<img src="images/finddoc.png"></img>
							<div class="info">
								<h1>FindaDoc</h1>
								<p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
								<button> Learn More</button>
							</div>
						</li>
	
						</Fade> */}
	
					</ul>
	
					
				</div>
				</Particle>
			</div>

			<Doc visible={this.state.isFindDoc} closeFindDoc={this.closeFindDoc}></Doc>
			<Web visible={this.state.isWebsite} closeWebsite={this.closeWebsite}></Web>
			
			</div>
	
		)
	}
}


function Particle({ children }) {
	return (
		<div style={{ position: "relative" }}>
			<ReactParticles
				params={particlesConfig}
				style={{
					position: "absolute",
					zIndex: 0,
					left: 0,
					right: 0,
					bottom: 0,
					top: 0
				}}
			/>
			{children && <div style={{ position: "relative" }}>{children}</div>}
		</div>
	);
}


