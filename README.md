# NEOs API

###### Author: Lucas Hanke

### Running through Docker

Install Docker (https://www.docker.com/) and docker-compose (https://docs.docker.com/compose/).

Before running any commands, it is necessary to set an environment variable with NASA's API key. Just edit the .env file and set the `NASA_API_KEY` value.

* Build the app with `docker-compose build`
* To execute the command to fetch NEOs from NASA's API: `docker-compose run fetch`
* To run the application's API: `docker-compose up app` - The APIs should be accessible through port 3001: http://localhost:3001/
* To run the application's tests: `docker-compose run tests`


### Running locally

#### Install Dependencies

1. Install Node.js version: v6.11.2 https://nodejs.org/en/download/
1. Install Node dependencies: `npm install`
1. Install MongoDB: https://www.mongodb.com/

#### Available Commands

Before running any commands, it is necessary to set an environment variable with NASA's API key. Just run the following command from the terminal: `export NASA_API_KEY=<api_key>`

* To execute the command to fetch NEOs from NASA's API: `npm run fetch`

* To run the application's API: `npm start`

#### Testing

* To run the application's tests: `npm test`
