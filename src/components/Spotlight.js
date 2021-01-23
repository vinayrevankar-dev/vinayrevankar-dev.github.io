import React from 'react';
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';

class Spotlight extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			styles: StyleSheet.create({
				fadeInUp: {
				animationName: fadeInUp,
				animationDuration: props.duration + 's'
				},
				image: {
					height: 450,
					width: 450,
					'object-fit': 'cover'
				}
			})
		};
	}
	render(){
		return(
			<section>
				<a href="#" className="image"><img className={css(this.state.styles.image)} src={`images/${this.props.image}`} alt="" data-position="center center" /></a>
				<div className={`content ${css(this.state.styles.fadeInUp)}`} >
					<div className="inner">
						<h2>{this.props.header}</h2>
						<p>{this.props.body}</p>
						<ul className="actions">
							<li><a href="generic.html" className="button">Learn more</a></li>
						</ul>
					</div>
				</div>
			</section>
		)
	}
	
}

export default Spotlight;