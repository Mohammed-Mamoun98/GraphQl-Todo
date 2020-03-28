// app.use(express.json());
// app.use('*',cors());
// const mongoose = require("mongoose");
// const ObjectId = require("mongoose").Types.ObjectId;
// app.post("/movie", async (req, res) => {
//   const actor = await Actor.findById(new ObjectId(req.body.id));
//   // console.log("we found a actor ", actor.populate("movies"));

//   const movie = new Movie({ ...req.body });
//   await movie.save();
//   res.send({ movie });
// });

// app.get("/movie", async (req, res) => {
//   // const movie = new movie(req.body);
//   // await movie.save();
//   const movies = await Movie.findById(req.body.id);
//   res.send({ movies });
// });

// app.post("/actor", async (req, res) => {
//   const actor = new Actor(req.body);
//   await actor.save();
//   res.send({ actor });
// });

// app.get("/actor", async (req, res) => {
//   // const actor = new Actor(req.body);
//   // await actor.save();
//   const actors = await Actor.find();
//   res.send({ actors });
// });

// app.get("/actorMovies", async (req, res) => {
//   // const actor = new Actor(req.body);
//   // await actor.save();
//   const actor = await Actor.findById(new ObjectId(req.body.id));
//   await actor.populate("movies").execPopulate();

//   // console.log(ID(req.body.id));

//   // const actors = await Actor.findById(ID(req.body.id));
//   res.send({ actorsMovies: actor.movies });
// });

// app.get("/MovieActors", async (req, res) => {
//   // const actor = new Actor(req.body);
//   // await actor.save();
//   const movie = await Movie.findById(new ObjectId(req.body.id));
//   await movie.populate("actor").execPopulate();
//   movie.actor.push(new ObjectId("5e7ccc1673ecee4344d04e42"));
//   // console.log(ID(req.body.id));

//   // const actors = await Actor.findById(ID(req.body.id));
//   res.send({ MovieActor: movie.actor });
// });
