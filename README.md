# Stock Project / Technical Exercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
any questions or inquiries can be sent to brittanyterbush@gmail.com

#### Notes: 
- [Material UI](https://material-ui.com/) used for design/ component library.
- [Finnhub.io API](https://finnhub.io/) used to return list of stocks and individual stock quote data.
- Tests use Enzyme/Jest
- Mobile responsive
- Can remove stocks, but not create/add stocks.


## Project Setup
To run project -
1. `yarn install`
2. Add `.env` file in root project directory and include this line `REACT_APP_STOCK_API_KEY=`.
3. Get free api key from [finnhub.io](https://finnhub.io/).
4. Add API key to `.env` file.
5. `yarn start`

## Project Specs
### Web Engineer Coding Exercise
Create stock market quote app using React

Demonstrate use of unit testing
Application should work in a current Chrome browser
Display a list of stocks in a table
When a stock is selected, display details of the stock
Stock quotes should be retrieved asynchronously from a source on the internet.
Use whatever network library/mechanism you prefer to make your API requests
The source you select for stock quotes should return a JSON response.
Use whatever mechanism you prefer to parse the JSON response and render the content in your app
Please commit your code via Github, Bitbucket or Gitlab repository with all commits intact
Spend no more than 4 to 8 hours
 

#### Stretch Goals

Responsive, works on mobile browser
List of stocks is editable
Demonstrate use of Test Driven Development (TDD)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
