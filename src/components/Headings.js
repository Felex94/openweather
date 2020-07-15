import React from "react";


class Heading extends React.Component {
	render() {
		return(
			<div>
				<h1 className="title-container__title">Weather Finder</h1>
				<p className="title-container__subtitle">Use your location to check Weather condition.</p>
			</div>

		);
	}
}

export default Heading;