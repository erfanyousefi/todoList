const controller = require("./controller");
class homeController extends controller {
    indexPage(req, res) {
        res.json({
            hi: "Hello"
        })
    }
}

module.exports = new homeController();