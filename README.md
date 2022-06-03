# Weather-Journal App Project

## Overview

This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI.

### the project

#### install the packages Express, Body-Parser, and Cors from the terminal and them include them at server.js file.

#### server running on the port 3000

#### Added a GET route that returns the projectData object in the server code

#### add a POST route that adds incoming data to projectData.

#### The POST route receiving three pieces of data from the request body :-

##### 1-Country

##### 2-temp

##### 3-user response

#### Acquire API credentials from OpenWeatherMap website. Used credentials and the base url to create global variables at the top of app.js code

#### an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.

#### Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.

#### chain another Promise that makes a POST request to add the API data, as well as data entered by the user,

#### chain another Promise that updates the UI dynamically another async function that is called after the completed POST request.
