import React, { Component } from "react";
import "./Item.css";

class Item extends Component {

	constructor(props) {
		super(props);
		this.state = { isToggleOn: true, moveMeRight: 0, moveMeUp: 0, awwPerspectiveX: 0, awwPerspectiveY: 0, width: 0, height: 0, mouseX: 0, mouseY: 0 };

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
		let totalAngle = 15; //angle to use in perspective, from -totalAngle to totalAngle
		//changing perspective degree between -totalAngle to totalAngle degrees
		let screenPerspectiveX = ((this.state.width - this.props.x) / this.state.width) * totalAngle * 2; // totalAngle * 2  because im assuming the perspective will change between -totalAngle to totalAngle
		let screenPerspectiveY = ((this.state.height - this.props.y) / this.state.height) * totalAngle * 2; // totalAngle * 2  because im assuming the perspective will change between -totalAngle to totalAngle
		//let widthToDegree = screenWidth - 
		// finish changing perspective
		changeX = (changeX - halfElementWidth) / 1000;
		let halfElementHeight = eleHeight / 2;
		changeY = (changeY - halfElementHeight) / 1000;
		this.setState(prevState => ({
			moveMeRight: this.state.moveMeRight + changeX,
			moveMeUp: this.state.moveMeUp + changeY,
			awwPerspectiveX: -1 * (screenPerspectiveX - totalAngle), // Addded -1 to make animation touch ground following the position of the mouse (0 is top and total height is bottom)
			awwPerspectiveY: screenPerspectiveY - totalAngle
		}));

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

	render() {
		return (
			<div ref={(el) => this.instance = el} Style={"z-index:10; transform: translate(" + this.state.moveMeRight + "px," + this.state.moveMeUp + "px) perspective(400px) rotateY(" + this.state.awwPerspectiveX + "deg) rotateX(" + this.state.awwPerspectiveY + "deg);"} className="portfolioItem" onMouseMove={this.handleClick}>
				{/* <p >{this.props.name} {this.props.x} {this.props.y}</p> */}
				<p >{this.props.description}</p>
				{this.props.image &&
					<img className="itemImg" src={this.props.img} />
				}
			</div>
		);
	}
}

export default Item;
