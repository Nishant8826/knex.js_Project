const express = require("express");
const multer = require('multer');

const userRoute = require('./src/routes/user.js')

const app = express();

app.use(multer().any());
app.use(express.json());

//customer Modal 
// const userModel = require('./src/model/user.js')
// userModel.createTable();
//address Modal 
// const addressModel = require('./src/model/userAddress.js')
// addressModel.createTable();

app.use("/", userRoute)


app.listen(process.env.PORT || 4000, () => {
    console.log(`server is running on ${process.env.PORT || 4000}`);
});

