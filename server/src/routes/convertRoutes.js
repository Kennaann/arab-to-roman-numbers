const express = require("express");
const router = express.Router();
const convertController = require("../controllers/convertController");

router.post("/convert", convertController.handlePostRequest);

module.exports = router;
