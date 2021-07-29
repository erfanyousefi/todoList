const { Router } = require("express");
const router = Router();
const homeController = require("./../http/controllers/home");
const todoRoutes = require("./todo");
router.get("/", homeController.indexPage)
router.use(todoRoutes)
module.exports = router;