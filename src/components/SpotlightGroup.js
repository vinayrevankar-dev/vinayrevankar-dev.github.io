import React from 'react';
import Spotlight from "./Spotlight.js"


class SpotlightGroup extends React.Component{
	constructor(props){
		super(props);
		this.education = `I graduated in 2020 from The University of Michigan (Go Blue!) with a Bachelors in 
		Computer Science Engineering. On top of the curriculum, I had to opportunity to explore other 
		subjects such as Cognitive Science, Animation, Sales, Automotive engineering, etc. The aftermost 
		resulted in me studying abroad in Japan for 6 weeks!`
		this.profession = `I am currently a software engineer at Amazon, working under the D2AS (Device & Digital 
		& Alexa Support) team. My responsibility is to develop end-to-end infrastructure that enables 
		data scientists to create and deploy ML models efficiently, accurately, and with minimal overlap and downtime`
	}
	render(){
		return(
			<section id="one" className="wrapper style2 spotlights">
								
				<Spotlight header="Education" body={this.education} duration="1" image="umich_cse_logo.png"/>
				<Spotlight header="Profession" body={this.profession} duration="3" image="Amazon-Logo-Black.jpg"/>
			
			</section>
		)
	}
}

export default SpotlightGroup;