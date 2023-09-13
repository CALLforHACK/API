// require the library
const mongoose = require("mongoose");

// connecting to the database
mongoose.connect('mongodb+srv://viswajeetmishra261:lHWHaq7OOJUzkmyv@cluster0.zww1i9m.mongodb.net/?retryWrites=true&w=majority'); // Remove the quotes around process.env.MONGOURL

// acquire the connection to check if it is successful
const db = mongoose.connection;

// checking the error
db.on("error", console.error.bind(console, "error in connecting the database"));

// up and running then print the statement
db.once("open", function () {
  console.log("successfully connected to the database"); // Corrected the log message
});

// exporting the db
module.exports = db;
