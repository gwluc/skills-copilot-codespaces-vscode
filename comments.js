// create web server

// import express
const express = require("express");
// import comment router
const router = express.Router();
// import comment controller
const commentController = require("../controllers/commentController");
// import user controller
const userController = require("../controllers/userController");

// create comment routes
// GET request for creating comment
router.get("/create", commentController.comment_create_get);

// POST request for creating comment
router.post("/create", commentController.comment_create_post);

// GET request for deleting comment
router.get("/:id/delete", commentController.comment_delete_get);

// POST request for deleting comment
router.post("/:id/delete", commentController.comment_delete_post);

// GET request for updating comment
router.get("/:id/update", commentController.comment_update_get);

// POST request for updating comment
router.post("/:id/update", commentController.comment_update_post);

// GET request for one comment
router.get("/:id", commentController.comment_detail);

// GET request for list of all comments
router.get("/", commentController.comment_list);

// export router
module.exports = router;