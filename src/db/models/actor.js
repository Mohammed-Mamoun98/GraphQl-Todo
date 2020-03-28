const mongoose = require("mongoose");

const actorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  }
  // movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }]
});

actorSchema.virtual("movies", {
  ref: "Movie",
  localField: "_id",
  foreignField: "actor"
});

const Actor = mongoose.model("Actor", actorSchema);

module.exports = Actor;
