import React from 'react';
import Feature from "./Feature.js"


class FeatureGroup extends React.Component{
	constructor(props){
		super(props);
		this.website = `I am exploring website design and advancing my front end skills by creating this website.`
		this.price_tracker = `A software project that can notify me of the best online deals while also furthering my web skills`
		this.music_prod = `Being passionate about instrumental music ever since Inception came out, I decided to create some of my own.`
		this.video = `If a picture is worth a thousand words, then the possibilities behind videography are endless!`
	}
	render(){
		return(
			<section id="two" className="wrapper style3 fade-up">
			<div className="inner">
				<h2>The rest: building a technical and creative portfolio</h2>
				<p>In my own free time, I explore challenges and use cases for my coding repertoire and artistic passions</p>
				<div className="features">
					<Feature header="This website" body = {this.website} iconName="icon solid major fa-desktop"/>
					<Feature header="Online price tracker" body = {this.price_tracker} iconName="icon solid major fa-tags"/>
					<Feature header="Music production" body = {this.music_prod} iconName="icon solid major fa-compact-disc"/>
					<Feature header="Videography" body = {this.video} iconName="icon solid major fa-video"/>
				</div>
				
				{/* <ul className="actions">
					<li><a href="generic.html" className="button">Learn more</a></li>
				</ul> */}

			</div>
			</section>
		)
	}
}

export default FeatureGroup;