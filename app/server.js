const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const expressEjsLayouts = require("express-ejs-layouts")
const Router = require("./routes/index")
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
        app.use(express.static(path.join(__dirname, "public")))
        app.set("view engine", "ejs")
        app.use(expressEjsLayouts);
        app.set("views", "resource/views");

    }
    databaseConnection() {

    }
    createRouting() {
        app.use(Router)
    }
}