const mongoose = require("mongoose");

const movieListSchema = new mongoose.Schema({
  movie: {
    type: String,
  },
});

module.exports = mongoose.model("movie", movieListSchema);
