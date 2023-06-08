const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const usersRoute = require('./routes/usersRoute');
const error = require('./middlewares/errorMiddlewareHandler');
const dotenv = require('dotenv');
const bookRoute = require('./routes/bookRoutes');

//call the .env function
dotenv.config();

const app = express();

// const corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

  app.use(cors());

//db connect
dbConnect();

//passing body data as a json file. we cant use req.body data without this. error is coming as 'undefined'
app.use(express.json());

//routes
 //users
app.use('/api/users', usersRoute); // the rest of the path (/register, /login) is in usersRoute file
 //books
app.use('/api/books', bookRoute);

// console.log(process.env.MY_NAME);

//error middlewares
app.use(error.errorMiddlewareHandler);

//server
const PORT = process.env.PORT || 5000; //first port is used when deploying the app
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})

// sewwandik
// INV9hTqDoqqIzmMF
// mongodb+srv://sewwandik:<password>@book-keep-app.vmdhnnv.mongodb.net/test

// NOTE->usage of nodemon - using "npm run server" we can run the node app initially, then it will run automatically.