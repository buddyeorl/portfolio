import React, { Component } from "react";
import "./Cube3d.css";

class Cube3d extends Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0, textClass: "noTransitionText" };

		// This binding is necessary to make `this` work in the callback
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.messageAnimation = this.messageAnimation.bind(this);
	}

	messageAnimation() {
		let offsetTop = this.instance.getBoundingClientRect().top;
		// if (offsetTop < (this.state.height) && offsetBottom > (this.state.height / 20)) {
		if (offsetTop < (this.state.height)) {
			if (this.state.textClass === "noTransitionText") {
				// console.log("transition in");
				// console.log(offsetBottom);
				// console.log(this.state.height);
				this.setState({ textClass: "transitionLeftTextOnViewport" });
			}
		} else {
			if (this.state.textClass === "transitionLeftTextOnViewport") {
				//console.log("transition out");
				this.setState({ textClass: "noTransitionText" });
			}
		}
	}
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
		window.addEventListener('scroll', this.messageAnimation);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
		window.removeEventListener('scroll', this.messageAnimation);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render(props) {
		return (
			<div ref={(el) => this.instance = el} class="wrap">
				<div class="cube">
					<div class="front">front</div>
					<div class="back">back</div>
					<div class="top">top</div>
					<div class="bottom">bottom</div>
					<div class="left">left</div>
					<div class="right">right</div>
				</div>
			</div>
		);
	}
}

export default Cube3d;
