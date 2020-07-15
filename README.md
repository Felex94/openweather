This project was bootstrapped with Create React App.

Learn about making a Progressive Web App [here](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
Refresh the page to enter new data

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

## code comments

* we created react component called App
* class based component
* render out the dom components to start with
* then i created a getweather method in side i first give it API_CALL then convert it with json
* and then take the values of the the input forms
* After that i set the state defined and make sure that the values have be entered correctly if not it will return the error message
*in the form i pass the prop getweather and set the function that will run every time wen the button is pressed (onSubmit) the the form component
* in the weather component i render out the small (para) based on the props that if the props exist then the (para) will get rendered


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

This code example highlights how to use the Fetch API to retrieve data that is displayed
in a React app from an API.

In this example, the App.js component has been modified display data fetched from the Google Books API. 
See comments in ./src/App.js.

To run this project, do the following:
1. Copy the directory called 'example' to your local machine.
2. Navigate to this directory from the command line interface. E.g. cd c:\example.
3. In the command line interface type 'npm install'
4. Now type 'npm start'. Runs the app in the development mode.
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.