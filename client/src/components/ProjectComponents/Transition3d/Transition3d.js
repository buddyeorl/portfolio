import React, { Component } from "react";
import "./Transition3d.css";

class Transition3d extends Component {

	constructor(props) {
		super(props);
		this.state = { moveMeRight: 0, moveMeUp: 0, awwPerspectiveX: 0, awwPerspectiveY: 0, width: 0, height: 0, mouseX: 0, mouseY: 0, textClass: "transition3d" };

		// This binding is necessary to make `this` work in the callback
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleClick() {
		let offsetTop = this.instance.getBoundingClientRect().top;
		let offsetLeft = this.instance.getBoundingClientRect().left;
		let changeX = (this.props.x - offsetLeft);
		let changeY = (this.props.y - offsetTop);
		let eleWidth = this.instance.getBoundingClientRect().width;
		let eleHeight = this.instance.getBoundingClientRect().height;
		let halfElementWidth = eleWidth / 2;
		let totalAngle = this.props.rotateAngle; //angle to use in perspective, from -totalAngle to totalAngle
		let delay = this.props.delay; // how quickly it moves to the mouse pointer in px transformation
		//changing perspective degree between -totalAngle to totalAngle degrees
		let screenPerspectiveX = ((this.state.width - this.props.x) / this.state.width) * totalAngle * 2; // totalAngle * 2  because im assuming the perspective will change between -totalAngle to totalAngle
		let screenPerspectiveY = ((this.state.height - this.props.y) / this.state.height) * totalAngle * 2; // totalAngle * 2  because im assuming the perspective will change between -totalAngle to totalAngle
		//let widthToDegree = screenWidth - 
		// finish changing perspective
		changeX = (changeX - halfElementWidth) / delay;
		let halfElementHeight = eleHeight / 2;
		changeY = (changeY - halfElementHeight) / delay;
		// this.setState(prevState => ({
		// 	moveMeRight: this.state.moveMeRight + changeX,
		// 	moveMeUp: this.state.moveMeUp + changeY,
		// 	awwPerspectiveX: -1 * (screenPerspectiveX - totalAngle), // Addded -1 to make animation touch ground following the position of the mouse (0 is top and total height is bottom)
		// 	awwPerspectiveY: screenPerspectiveY - totalAngle
		// }));

		if (this.props.follow === true) {
			this.setState(prevState => ({
				moveMeRight: this.state.moveMeRight + changeX,
				moveMeUp: this.state.moveMeUp + changeY,
				awwPerspectiveX: -1 * (screenPerspectiveX - totalAngle), // Addded -1 to make animation touch ground following the position of the mouse (0 is top and total height is bottom)
				awwPerspectiveY: screenPerspectiveY - totalAngle
			}));
		} else {
			this.setState(prevState => ({
				awwPerspectiveX: -1 * (screenPerspectiveX - totalAngle), // Addded -1 to make animation touch ground following the position of the mouse (0 is top and total height is bottom)
				awwPerspectiveY: screenPerspectiveY - totalAngle
			}));
		}
		// console.log("X " + this.props.x);
		// console.log("Y " + this.props.y);
		// console.log("ClientX " + this.state.width);
		// console.log("ClientY " + this.state.height);
		// console.log("OffsetTop " + offsetTop);
		// console.log("OffsetLeft " + offsetLeft);
		// console.log("Width " + this.instance.getBoundingClientRect().width);
		// console.log(this.instance.offsetParent);
		// console.log(this);
	}

	handleMouseLeave() {
		this.setState(prevState => ({
			moveMeRight: 0,
			moveMeUp: 0
		}));
	}
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	componentWillReceiveProps() {
		this.handleClick();
		//reset position in case of hoverOut
		if (this.props.x === 0 && this.props.y === 0) {
			this.handleMouseLeave();
		}
	}
	render(props) {
		return (
			<div ref={(el) => this.instance = el} Style={"transform: translate(" + this.state.moveMeRight + "px," + this.state.moveMeUp + "px) perspective(400px) rotateY(" + this.state.awwPerspectiveX + "deg) rotateX(" + this.state.awwPerspectiveY + "deg);"} className={this.state.textClass} onMouseMove={this.handleClick}>
				{this.props.message}
			</div>
		);
	}
}

export default Transition3d;
