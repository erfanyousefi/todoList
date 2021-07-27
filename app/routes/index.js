const { Router } = require("express");
const router = Router();
const homeController = require("./../http/controllers/home");
router.get("/", homeController.indexPage)
module.exports = router;