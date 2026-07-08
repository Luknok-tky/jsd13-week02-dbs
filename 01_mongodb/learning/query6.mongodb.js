use("sample_mflix");

// 1. Find all movies in the "movies" collection released between 1950 and 1970 (inclusive) that are documented as being shown in countries located in the USA.
db.movies.find({
  year: { $gte: 1950, $lte: 1970 },
  countries: "USA"});

// 2. What is the number of movies in the "movies" collection with genres "Drama" and "History" released after the year 1970?
db.movies.find({
  year: { $gt: 1970 },
  genres: { $all: ["Drama", "History"] }
});

// 3. In how many films is Roy L. McCardell credited as an actor?
db.movies.find({
  cast: "Roy L. McCardell"}).count()

// 4. How many movies did Hal Roach directed?
db.movies.find({
  directors: "Hal Roach"}).count()

// 5. What is the movie with the earliest release year directed by Hal Roach?
db.movies.find({ directors: "Hal Roach" }).sort({ year: 1 }).limit(1);

// 6. How many awards did Hal Roach's movies win?
db.movies.aggregate([
  { $match: { directors: "Hal Roach" } },
  { $group: { _id: null, totalWins: { $sum: "$awards.wins" } } }
]);