WordPress Post Pulling App


About The Application:

The WordPress Post Pulling Application is used to display posts from a given WordPress that has the WordPress REST API plugin installed.
Some uses of this application include integrating it into an existing website, which can pull from multiple WordPress sources. A great example
of using this would be when there are multiple bloggers working for the same cause (company) and their posts need to be integrated in one place.


Application's Entry Point:

The application's entry point is at server.js. A simple way to start the application is to use node's package manager to start the whole app.
Given that node.js is installed on the user's machine, a simple terminal command like 'npm start' (ommit the ''), will start the application on
port 3000. The application is also given the capability to be deployed on a live service such as Heroku. The app comes with preset settings which
will automatically choose the default port on the host machine to which the app is deployed.


Technologies Used:

Front-End - React.js
Back-End - Node.js
CSS Library: Foundation


How To Use:

Simple press the Big Green Button on the screen and it will display the posts. Currently the app only supports post searching from a static URL.


Future Updates:

The app will support a search feature, where the use will be able to enter their WordPress URL and receive posts from their website.
