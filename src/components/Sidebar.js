import React from 'react';
import { fadeInUp } from 'react-animations'
import { StyleSheet, css } from 'aphrodite';

class Sidebar extends React.Component{
	constructor(props){
		super(props);
		const animation = {
			animationName: fadeInUp,
			animationDuration: '2s',
			'animation-fill-mode': 'both'
		}
		this.styles = StyleSheet.create({
			delay1: Object.assign({'animation-delay': '0s'}, animation),
			delay2: Object.assign({'animation-delay': '.5s'}, animation),
			delay3: Object.assign({'animation-delay': '1s'}, animation),
			delay4: Object.assign({'animation-delay': '1.5s'}, animation),
			
		});
	}
	render(){
		return(
			<section id="sidebar">
				<div className="inner">
					<nav>
						<ul>
							<li><a className={`${css(this.styles.delay1)}`} href="#intro">Hey!</a></li>
							<li><a className={`${css(this.styles.delay2)}`} href="#one">School & Job</a></li>
							<li><a className={`${css(this.styles.delay3)}`} href="#two">Code & Art</a></li>
							<li><a className={`${css(this.styles.delay4)}`} href="#three">Get in touch</a></li>
						</ul>
					</nav>
				</div>
			</section>
		)
	}

}

export default Sidebar;