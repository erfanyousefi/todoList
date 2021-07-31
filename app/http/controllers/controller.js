const autoBind = require("auto-bind")
module.exports = class controllers {
    constructor(){
        autoBind(this)
    }
    back(req, res) {
        res.redirect(req.headers.referer)
    }
}