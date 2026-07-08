use("sample_mflix");

// 1. Fetch all documents from comments collection.
db.comments.find({});

// 2. Fetch only one user from comments collection by _id = ObjectId("5a9427648b0beebeb69579f5").
db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5") });

// 3. Fetch only one user from comments collection by email = "john_bishop@fakegmail.com".
db.comments.findOne({ email: "john_bishop@fakegmail.com" });

// 4. Fetch only one user from comments collection by name = "John Bishop".
db.comments.findOne({ name: "John Bishop" });
