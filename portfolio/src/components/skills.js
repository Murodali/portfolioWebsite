import '../css/styles.css';
import Carousel from 'react-bootstrap/Carousel';
import { useSpring, animated } from 'react-spring';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles';
import React, { useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';
// import assets from "../assets";
export default function skills() {
	return (

		<Particles> 
	
			<div className="  skills " id="myskills">


				<div className="text-featured">
					<p className="subtitle ">My Skills </p>

				</div>

		

				<div className="skills-row">
			
					<div className="main">

								<div className="container">
							
								
									<div className="row">
										
										{cards.map((card, i) => (
											<div className="column">
												
												<Card>
												<Image ratio={card.imageRatio} src={card.image} />
													<div className="card-title">{card.title}</div>
													<div className="card-body">{card.description}</div>
													<div className="card-title">{card.info}</div>
													<div className="card-body">{card.addinfo}</div>
													<div className="card-title">{card.tools}</div>
													<div className="card-skills">{card.toolslist}</div>

													
												</Card>
										
											</div>
										))}
									
									</div>
								
									
								</div>
							
								
					</div>

				

				</div>
				
			
			</div>

			</Particles>
		
		

	)
}


function Card({ children }) {
	// We add this ref to card element and use in onMouseMove event ...
	// ... to get element's offset and dimensions.
	const ref = useRef();

	// Keep track of whether card is hovered so we can increment ...
	// ... zIndex to ensure it shows up above other cards when animation causes overlap.
	const [isHovered, setHovered] = useState(false);

	const [animatedProps, setAnimatedProps] = useSpring(() => {
		return {
			// Array containing [rotateX, rotateY, and scale] values.
			// We store under a single key (xys) instead of separate keys ...
			// ... so that we can use animatedProps.xys.interpolate() to ...
			// ... easily generate the css transform value below.
			xys: [0, 0, 1],
			// Setup physics
			config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
		};
	});

	return (
		<animated.div
			ref={ref}
			className="card"
			onMouseEnter={() => setHovered(true)}
			onMouseMove={({ clientX, clientY }) => {
				// Get mouse x position within card
				const x =
					clientX -
					(ref.current.offsetLeft -
						(window.scrollX || window.pageXOffset || document.body.scrollLeft));

				// Get mouse y position within card
				const y =
					clientY -
					(ref.current.offsetTop -
						(window.scrollY || window.pageYOffset || document.body.scrollTop));

				// Set animated values based on mouse position and card dimensions
				const dampen = 200; // Lower the number the less rotation
				const xys = [
					-(y - ref.current.clientHeight / 2) / dampen, // rotateX
					(x - ref.current.clientWidth / 2) / dampen, // rotateY
					1.07 // Scale
				];

				// Update values to animate to
				setAnimatedProps({ xys: xys });
			}}
			onMouseLeave={() => {
				setHovered(false);
				// Set xys back to original
				setAnimatedProps({ xys: [0, 0, 1] });
			}}
			style={{
				// If hovered we want it to overlap other cards when it scales up
				zIndex: isHovered ? 2 : 1,
				// Interpolate function to handle css changes
				transform: animatedProps.xys.interpolate(
					(x, y, s) =>
						`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
				)
			}}
		>
			{children}
		</animated.div>
	);
}

function Particles({ children }) {


	return (
		<div style={{ position: "relative" }}>
			<ReactParticles
				params={particlesConfig}
				style={{
					position: "absolute",
					zIndex: 1,
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



function Image({ ratio, src }) {
	return (
		<div className="image-container">
			<div className="image-inner-container">
				<div
					className="ratio"
					style={{
						paddingTop: ratio * 100 + "%"
					}}
				>
					<div className="ratio-inner">
						<img src={src} />
					</div>
				</div>
			</div>
		</div>
	);
}



const cards = [
	{
		title: "UI/UX Designer",
		description:
			"I value simple content structure, clean design patterns, and thoughtful interactions.",
		info: "Things I enjoy designing",
		addinfo:"UX, UI, Web, Mobile, Apps, Logos",
		tools: "Design Tools",
		toolslist:" Balsamiq Mockups Figma Invision Marvel Pen & Paper Sketch Webflow Zeplin WordPress",
		image: "images/ui-main.svg",
		imageRatio: 784 / 1016
	},
	{
		title: "Web Developer ",
		description:
			"I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
		info: "Languages and Frameworks I use:",
		addinfo:"HTML, Javascript, ReactJS, CSS, Sass",
		tools: "Dev Tools:",
		toolslist:"Boostrap NodeJS Styled Components Github Gitlab Bulma Redux Tailwind REST API Axios",
		image: "images/web-dev.svg",
		imageRatio: 839 / 1133
	},
	{
		title: "Mobile App Developer",
		description:
		"I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
		info: "Languages and Frameworks I use:",
		addinfo:"Java, Dart",
		tools: "Dev Tools:",
		toolslist:" Android Studio Flutter Github Gitlab JavaFX FireBase NodeJS REST API ",
		image: "images/mb-dev.svg",
		imageRatio: 730 / 1030
	}
];