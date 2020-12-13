var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors')
const port = 8000;
const bodyParser= require('body-parser')

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var gradesRouter = require("./routes/grades");
var sleepRouter = require("./routes/sleep");
var sportRouter = require("./routes/sport");
var todolistRouter = require("./routes/todolist");
var bankRouter = require("./routes/bank");
const { run } = require("./db");

var app = express();
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

run()
.then(client => {
    app.use("/", indexRouter);
    app.use("/users", usersRouter);
    app.use("/grades", gradesRouter);
    app.use("/sleep", sleepRouter);
    app.use("/sport", sportRouter);
    app.use("/todotlist", todolistRouter);
    app.use("/bank", bankRouter);
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
})
.catch(console.dir);


module.exports = app;
