var express = require("express");
var router = express.Router();
var {
  createMovie,
  getAllMovies,
  deleteMovie,
  updateMovieList,
} = require("./controller/movieListController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/get-all-movies", getAllMovies);

router.post("/create-movie", createMovie);

router.delete("/delete-movie/:id", deleteMovie);

router.put("/edit-movie/:id", updateMovieList);

module.exports = router;
