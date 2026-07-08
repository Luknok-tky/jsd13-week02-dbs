use("sample_mflix");

// 1. What is an example of type "Movie" and rated "TV-G" look like?
db.movies.findOne({ type: "movie", rating: "TV-G" });

// 2. How many movies are there in "Movie" type and "TV-G" rated?
db.movies.find({ type: "Movie", rating: "TV-G" }).count()
