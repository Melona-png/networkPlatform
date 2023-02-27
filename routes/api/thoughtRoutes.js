const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtControllers");

// GET all and POST
router.route("/").get(getThoughts).post(createThought);

// GET one, PUT, and DELETE
router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);


router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);
router.route("/:thoughtId/reactions").post(addReaction);

module.exports = router;