import React, { Component } from "react";
import "./MagneticMouse.css";
import Item from '../Item';
import Transition3d from '../Transition3d';


class MagneticMouse extends Component {
	constructor(props) {
		super(props);
		this.state = { xMagnet: 0, yMagnet: 0 };

		// This binding is necessary to make `this` work in the callback
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}
	handleMouseEnter(e) {
		e.persist();
		// console.log("X " + e.clientX);
		// console.log("Y " + e.clientX);
		this.setState(prevState => ({
			xMagnet: e.clientX,
			yMagnet: e.clientY
		}));
	}
	handleMouseLeave(e) {
		e.persist();
		this.setState(prevState => ({
			xMagnet: 0,
			yMagnet: 0
		}));

	}
	render(props) {
		return (

			<React.Fragment>
				<section style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onMouseMove={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>

					{/* <div className="w-100 h-50">
						<div className="w-50 h-100 m-0 p-0" Style={"float:left;"}>
							<Transition3d x={this.state.xMagnet} y={this.state.yMagnet} follow={true} rotateAngle={5} delay={5000} message={
								<header>
									<h1 className="myName">{this.props.myName}</h1>
								</header>
							}
							/>
						</div>
					</div> */}
					<div className="w-25 h-100" Style={"float:left;"}>
						<Item description={this.props.myBackground} img={this.props.image} x={this.state.xMagnet} y={this.state.yMagnet} />
					</div>

				</section>

			</React.Fragment>
		);
	}
}

export default MagneticMouse;
