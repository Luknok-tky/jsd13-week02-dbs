use("sample_mflix");

// 1. How many theaters does AL state has?
db.theaters.find({ "location.address.state": "AL" }).count()

// 2. How many theaters does La Quinta city has?
db.theaters.find({ "location.address.city": "La Quinta" }).count()

// 3. What is an example of each documents of above like?
db.theaters.findOne({ "location.address.city": "La Quinta" });