const { Router } = require("express")
const router = Router()

router.use(require("./contact.Route/contact.route"))
router.use(require("./user.route"))

module.exports = router