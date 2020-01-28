const router = require("express").Router();
const bidController = require("../../controllers/api/bidController");

router.route("/").get(bidController.allBids);
router.route("/bytask/:id").get(bidController.byTaskBids);
router.route("/:id")
    .get(bidController.singleBid)
    .put(bidController.updateBid)
    .delete(bidController.deleteBid);
router.route("/new").post(bidController.newBid);

module.exports = router;