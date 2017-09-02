# NEOs API

###### Author: Lucas Hanke

### Running locally

#### Install Dependencies

1. Install Node.js version: v6.11.2 https://nodejs.org/en/download/
1. Install Node dependencies: `npm install`
1. Install MongoDB: https://www.mongodb.com/

#### Available Commands

Before running any commands, it is necessary to set an environment variable with NASA's API key. Just run the following command from the terminal: `export NASA_API_KEY=<api_key>`

* To execute the command to fetch NEOs from NASA's API: `npm run fetch`

* To run the application's API: `npm start`

The APIs should be accessible through port 3001: http://localhost:3001

#### Testing

* To run the application's tests: `npm test`
