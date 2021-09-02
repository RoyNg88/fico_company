/* eslint-disable no-undef */

require("dotenv").config();
require("./config/database").connect();

const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser')
const cors = require('cors');
const expressSession = require('express-session');

app.use(express.json());

const User  = require('./schemas/user');
const Admin  = require('./schemas/admin');

const auth = require("./middleware/auth");


app.use(bodyParser.json())
app.use('/uploads/fundraiser/', express.static('uploads/fundraiser'))
app.use('/uploads/user/', express.static('uploads/user'))
app.use(cors());
app.use(expressSession({
    secret: 'keyboard cat'
}))



/* ---------------------------------------------------- 
                START: Routers
---------------------------------------------------- */

// Fundraiser
const fundraiserRouter = require('./models/Fundraisers')

// Users
const userRouter = require('./models/Users')

// Admins
const adminRouter = require('./models/Admins')



/* ---------------------------------------------------- 
                START: Request handler
---------------------------------------------------- */

// Fundraiser Post
app.use('/fundraiser', fundraiserRouter);

// Admin Request
app.use('/api/admin', adminRouter);

// Users Request
app.use('/api/user', userRouter);

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

/* ---------------------------------------------------- 
                END: Request handler
---------------------------------------------------- */


// Register
app.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { name, username, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && name && username)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        name,
        username,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
  
      // return new user
      // res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });
  

  
// Login
app.post("/login", async (req, res) => {
    try {
      // Get user/admin input
      const { email, password } = req.body;
  
      // Validate user/admin input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user/admin exist in our database
      const user = await User.findOne({ email: req.body.email });
      const admin = await Admin.findOne({ email: req.body.email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
       
        // user
        res.json({user,
          'result': 'authenticated1',
          'token': user.token
      })
      }
      else if (admin && (await password === admin.password)) {
        // admin
        res.json({amin,
          'result': 'authenticated',
          'tokenad': admin.token
      })
      }
      else{
      res.status(400).send("Invalid Credentials");}
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });


  app.get('/api/logout',auth,(req,res) => {
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    });
}); 

  app.get('/api/logout',auth,(req,res) => {
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    });
    });
// This should be the last route else any after it won't work

app.use("*", (req, res) => {
    res.status(404).json({
      success: "false",
      message: "Page not found",
      error: {
        statusCode: 404,
        message: "You reached a route that is not defined on this server",
      },
    });
  });
  
module.exports = app;