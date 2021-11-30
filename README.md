# Technical Specifications
## 1. Technologies specification
  ![image](https://user-images.githubusercontent.com/81584616/144026224-080d6aca-8b68-4b99-8e1c-d1c4bade8929.png)
To successfully develop and build Fico Company, we have used the following tools and technologies in our project:
NodeJS + Express + Mongoose: NodeJS and the Express, Mongoose libraries are the main foundation for the backend and helped us to easily define RESTFUL APIs that could communicate with the MongoDB database. We chose these libraries because they are well-developed and have constantly been updated throughout the years, so they provide many convenient methods to implement the backend.
Bcrypt + JWT: These libraries are used to authenticate and validate users to ensure security for users when accessing the application. Bcrypt is used to hash passwords whenever users register for a new account and JWT creates a token signature for the users following the JWT standards. Bcrypt was chosen because it has been on the market for a long time and has still proven to be secured even now
ReactJS: The reputable library designed by Facebook to provide a more structured method to implement the UI using component-based approaches. With React, it is increasingly less time-consuming since some of the components can be reused within our application and the overall structure of it is easily understandable when reviewing.
MongoDB / MongoDB Atlas: With deployment in mind, we decided to use Mongo Atlas so that we would not have to make a separate deployment for the DB or have to worry much about maintenance. Furthermore, since MongoDB is a NoSQL database, it could be easier for us in the future to scale up if given the right opportunity.
Postman: This application provides a convenient method to test the REST APIs without having to worry about implementing the UI first. Therefore, it shortens the development time since the backend programmers can code and test even while the UI is being implemented.
## 2. Use case diagram 
  ![image](https://user-images.githubusercontent.com/81584616/144026148-e631075f-0268-4b9d-9b84-775a8dd9345b.png)
Guest users: Can only view/browse campaigns, but can still donate to campaigns using banking information provided on each campaign details. However, they can not create campaigns or receive notifications from the application.
Registered users: These users can perform all the functionalities provided to guest users with the addition of being able to create and manage their own campaigns as well as receive notifications.
Administrators: Admins have the highest authority out of all users and can perform all functionalities available to registered users plus the ability to ban/delete any users, delete any campaigns recorded and give administrator authority to any users.
## 3. Demo
https://www.youtube.com/watch?v=LYmj7CSa-k8
## 4. Team member contribution
Nguyen Dang Quang - s3741190: Building Full Stack
Back-end: Building CRUD Fundraiser, Upload Files/Image, Authentication(jwt) , Login/Register, Search, Approve admin for user
Front-end: Building CRUD features User/Admin , AdminPage, Filter (get fundType, Name and Title), Add/Update a Fundraiser form, Login/Register Form
Bui Tien Huy - s3777230: Front End Developer 
Building DetailPage, AboutUs Page, Donate Modal, Demo website
Write report 
Pham Le Gia Minh - s3768661: Back End Developer
Build CRUD User, hash Password, connect Mongoose 
Write report
Tran Cat Duy - s3757330: Front End Developer
Building Card, Grid/List Page, UserProfile Page  and Deployment
Nguyen Nguyen Phong - 3904419: Front End Developer
Building Header, NavBar, Footer, Homepage 
Write report, draw Use case and Class diagram
Nguyen Truong Thinh - s3777196: Front End Developer
Building CRUD features Fundraiser, Search, Table list Fundraiser/User, design UI for Fundraiser  
Write report

## Available Scripts
Back-end: http://localhost:4001
How-to-use Back-end URLS:

### User/Admin
GET: /user : get all user. <br/>
GET: /user/id : get user by id. <br/>
POST: /user : post a user. ( requires a admin id )  <br/>
DELETE: /user/id : delete a user by id. <br/>
PUT: /user/id : Update a user. (File stored in route /uploads/user/[filename]) <br/>
PUT: /user/id/status : Approve admin authentication for a user. <br/>

### PROJECTS Fundraiser
GET: /fundraiser : get all fundraiser. <br/> 
GET: /fundraiser/id : get project by id. <br/> 
POST: /fundraiser : post a project (require a proper admin ID)  (File stored in route /uploads/fundraisers/[filename])<br/>
DELETE: /fundraiser/id : delete a project by id. <br/>
PUT: /fundraiser/id : Update a project. <br/> 

Front-end: http://localhost:3000

In the project directory, you can run:
# When download this projects:
## Backend:
- Right click to `package.json` in `backend` folder
- Click `Open in Integrated Terminal`
- In terminal, write: `npm install`
## Frontend:
- Right click to `package.json` in `frontend` folder
- Click `Open in Integrated Terminal`
- In terminal, write: `npm install`
# To run this project:
## Backend
- Right click to `package.json` in `backend` folder
- Click `Open in Integrated Terminal`
- In terminal, write: `npm run dev`
## Frontend
- Right click to `package.json` in `frontend` folder
- Click `Open in Integrated Terminal`
- In terminal, write: `npm start`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
