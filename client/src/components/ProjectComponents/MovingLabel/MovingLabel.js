import React, { Component } from "react";
import "./MovingLabel.css";
import Transition3d from '../Transition3d';


class MovingLabel extends Component {
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

					<div className="w-100 h-50">
						<div className="w-50 h-100 m-0 p-0" Style={"float:left;"}>
							<Transition3d x={this.state.xMagnet} y={this.state.yMagnet} follow={this.props.follow} rotateAngle={this.props.angle} delay={1000} message={
								this.props.message
							}
							/>
						</div>
					</div>


				</section>

			</React.Fragment>
		);
	}
}

export default MovingLabel;
