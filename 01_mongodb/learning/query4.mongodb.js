use("sample_mflix");

// 1. How many movies mentioned American in their plot?
db.movies.find({ plot: { $regex: "American",$options: "i" } }).count()


// 2. How many movies does end plot (sentence) with the word street.
db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count()

// 3. What does the data of above examples look like?
db.movies.find({ plot: { $regex: "American",$options: "i" } })