const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const expressEjsLayouts = require("express-ejs-layouts")
const Router = require("./routes/index")
const mongoose = require("mongoose")
require("dotenv").config();
module.exports = class Application {
    constructor() {
        this.createServer();
        this.configApplication();
        this.databaseConnection();
        this.createRouting();
    }
    createServer() {
        const server = http.createServer(app);
        server.listen(process.env.PORT, (err) => !err ?
            console.log(`server runing on ${process.env.PORT} port!`) :
            console.log("run server failed..."))
    }
    configApplication() {
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(express.static("public"))
        app.set("view engine", "ejs");
        app.use(expressEjsLayouts);
        app.set("layout", "partials/master-layout");
        app.set("views", path.resolve("resource/views"));
        app.set("layout extractStyles", true);
        app.set("layout extractScripts", true);

    }
    databaseConnection() {
        mongoose.connect(`${process.env.STR_CONN_DB}`,{
            useCreateIndex : true,
            useFindAndModify : false,
            useNewUrlParser : true,
            useUnifiedTopology : true
        }, (err) => {
            if(!err) console.log("connect to database successfly.");
        })
    }
    createRouting() {
        app.use(Router)
    }
}