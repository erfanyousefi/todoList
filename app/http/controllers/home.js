const controller = require("./controller");
class homeController extends controller {
    indexPage(req, res) {
        res.render("home/index", {

        })
    }
}

module.exports = new homeController();