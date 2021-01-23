import React from 'react';

const Feature = (props) => (
	<section>
		<span className={props.iconName}></span>
		<h3>{props.header}</h3>
		<p>{props.body}</p>
	</section>
)

export default Feature;