**************************************************************************************************************************************

## server-code folder contains server side code
## ikonic-assign folder contains client side code

***************************************************************************************************************************************

## server-code folder contains server side code
### I have deployed server side code on heroku.Here is the list of working routes
#### GET https://ikonic-assign.herokuapp.com/quiz ##### This is the route to get all the questions in json
#### POST https://ikonic-assign.herokuapp.com/quiz ##### This is the route to post a question in json
#### TEST https://ikonic-assign.herokuapp.com/test ##### This page will fetch all the questions from database and display as html markup

****************************************************************************************************************************************

## ikonic-assign folder contains client side code
### I have deployed client side code on netlify. Here is the link to the app
#### https://ikonic-assign.netlify.app

****************************************************************************************************************************************
## Tests

### Unit testing
#### For unit testing i used jest dependency where i check mocked used functions to check the inner working of my controller functions

### Integration testing
#### For integration testing i used jest and supertest dependiences to check if the routes are working properly with required functionalities

****************************************************************************************************************************************

