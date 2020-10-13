import React, { Component } from "react";
import "./FollowingTag.css";

class FollowingTag extends Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0, textClass: "noFollowingTag", topPosition: "" };

		// This binding is necessary to make `this` work in the callback
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
		this.messageAnimation = this.messageAnimation.bind(this);
	}

	messageAnimation() {
		let offsetTop = this.instance.getBoundingClientRect().top;
		// if (offsetTop < (this.state.height) && offsetBottom > (this.state.height / 20)) {
		// if (changeTop > 976) {
		// 	this.setState({ topPosition: "position: sticky; top:0px", textClass: "followingTagOnViewport" });
		// }

		if (offsetTop < (this.state.height * 0.01)) {
			if (this.state.textClass === "noFollowingTag") {
				this.setState({ topPosition: "position: sticky;  position:-webkit-sticky;top:0px", textClass: "followingTagOnViewport" });
			}
		} else {
			if (this.state.textClass === "followingTagOnViewport") {
				this.setState({ textClass: "noFollowingTag" });
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
			<div ref={(el) => this.instance = el} Style={this.state.topPosition} className={"w-100 h-10 " + this.state.textClass}>
				{this.props.message}
			</div>
		);
	}
}

export default FollowingTag;
