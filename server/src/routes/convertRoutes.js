const express = require("express");
const router = express.Router();
const convertController = require("../controllers/convertController");

router.post("/convert", convertController.handlePostRequest);
router.get("/", (req, res) => res.send("API works"));

module.exports = router;
