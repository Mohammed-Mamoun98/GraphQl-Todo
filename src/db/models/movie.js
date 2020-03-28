const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  actor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }]
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
