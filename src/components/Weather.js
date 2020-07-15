import React from "react";


class Weather extends React.Component {
	render() {
		return(
			<div className="weather__info">

				{ 
					this.props.temperature && <p className="weather__key"> Temperature: 
					<span className="weather__value"> { this.props.temperature }</span>
					</p> 
				}
                { 
                	this.props.city && this.props.country && <p className="weather__key"> Location: 
                	<span className="weather__value"> { this.props.country }, {this.props.city}</span>
                	</p> 
            	}
                { 
                	this.props.humidity && <p className="weather__key"> Humidity: 
                	<span className="weather__value"> { this.props.humidity }</span>
                	</p> 
            	}
                { 
                	this.props.description && <p className="weather__key"> Condition: 
                	<span className="weather__value"> { this.props.description }</span>
                	</p> 
            	}
                { 
                	this.props.timezone && <p className="weather__key"> Timezone: 
                	<span className="weather__value"> { this.props.timezone }</span>
                	</p> 
            	}
                { 
                	this.props.error && <p className="weather__key"> 
                	<span className="weather__value"> { this.props.error }</span> 
                	</p> 
            	}

			</div>

		);
	}
}

export default Weather;