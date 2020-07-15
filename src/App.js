import React from "react";
import Heading from "./components/Headings";
import Form from "./components/Form";
import Weather from "./components/Weather";

// we created react component called App
// class based component
// render out the dom components to start with
// then i created a getweather method in side i first give it API_CALL then convert it with json
// and then take the values of the the input forms
// After that i set the state defined and make sure that the values have be entered correctly if not it will return the error message
//in the form i pass the prop getweather and set the function that will run every time wen the button is pressed (onSubmit) the the form component
// in the weather component i render out the small (para) based on the props that if the props exist then the (para) will get rendered



const API_KEY = "cce04279eb61723ecf6df32be4a71e86";

class App extends React.Component {
    state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            timezone: undefined,
            pressure: undefined,
            error: undefined
        }

    getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
        const data = await api_call.json();
        //console.log(data);

        if (city && country) {

                this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                timezone: data.timezone,
                error: ""

                });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                timezone: undefined,
                pressure: undefined,
                error: "Please enter your current location."
                });
        }

    }

    render() {
        return(
            
            <div>
             <div className="wrapper">
              <div className="main">
               <div className="container">
                <div className="row">
                 <div className="col-xs-6 title-container">
                    <Heading />
                  </div>
                  <div className="col-xs-6 form-container">
                    <Form getWeather={this.getWeather} />

                        <Weather 
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        timezone={this.state.timezone}
                        error={this.state.error}
                    />

                </div>
               </div>
              </div>
             </div> 
            </div>
          </div>
            

        );
    }
} 

export default App;





