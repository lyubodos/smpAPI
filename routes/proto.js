const express = require("express");

const router = express.Router();

const feedsContr = require("../controllers/proto");


router.get("/posts", feedsContr.getPosts);
router.post("/post", feedsContr.postPost);



module.exports = router;






