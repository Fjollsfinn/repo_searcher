## INFO
It's an application for searching github repositories. The project has been made only for the purpose of learning react.

## task assumptions:
Develop an application displaying dynamic tabular data using React and fetching data using Github public api.

Your app should render an input that is used to search Github repositories.
Consider:

- Make an API request to the Github API on input change, and get the result data
- Do not make an API request if the results are already stored
- Do not fire requests as long as the user is typing. Typically you should throttle requests so that when the user types quickly, we fire one request with the latest input value instead of many
The table should be of the following structure:

![Table](./src/table.png)

 The table should show maximum 5 rows at once.
 Apart from that, please implement the following (locally, not using API queries):
 - Pagination
 - Ability to control number of rows per page (5/10/15)
 - Sorting (asc/desc) by every column
 - A persistence mechanism (e.g. using localStorage) - so it remembers last search and settings after page refresh
Feel free to use your favorite UI components library if you like.

`specification`: https://hackmd.io/s/r1lLqA8S4

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).