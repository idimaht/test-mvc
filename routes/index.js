const express = require('express');
const router = express.Router()

const indexController = require("../controllers/indexController");

router.get("/", indexController.render);

// router.post("/post-images",(req, res) => res.indexConttroller.json(req.body));

module.exports = router;