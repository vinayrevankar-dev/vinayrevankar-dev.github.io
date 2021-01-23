import React from 'react';
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';

class Intro extends React.Component {
	constructor(props) {
		super(props);
		this.styles = StyleSheet.create({
			animation: {
				animationName: fadeInUp,
				animationDuration: '1s',
				'animation-delay': '1s',
				'animation-fill-mode': 'both'
			}
		})
	}
	render(){
		return(
			<section id="intro" className= "wrapper style1 fullscreen">
				<div className={`inner ${css(this.styles.animation)}`}>
					<h1>Hey, the name's Vinay</h1>
					<p>
						I'm a recent college graduate, currently working full time as a software engineer while also developing 
						other technical and creative outlets. Where do I want to be in the next year? Advancing my 
						software development skills in cloud, web dev, and machine learning and exploring different avenues of self-expression.
						<br/><br/>
						Where do I want to be in the next ten years? I don't know. Will I ever know? 
						Scroll down to learn more about where I am on this thing called life!
					</p>
					{/* <ul className="actions">
						<li><a href="#one" className="button scrolly">Learn more</a></li>
					</ul> */}
				</div>
				
			</section> 
		);
	}
}

export default Intro;