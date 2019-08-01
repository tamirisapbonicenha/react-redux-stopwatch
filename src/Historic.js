import React, { Fragment } from 'react';

const Historic = props => {
	return (
		<Fragment>
			<h4>Trials</h4>
			<ul>
				{props.time.map((time, index) => <li key={index}>{time}</li>)}
			</ul>
		</Fragment>
	)
}

export default Historic;