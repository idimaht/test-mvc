const mongoose = require("mongoose");

//use mongodb for connect database by host in mongo data 
module.exports.connect = async () => {
  await mongoose.connect("mongodb://localhost:27017/mvc");
};

// schema in database if this schema doesn't have in mongo, mongo will create collection by itself
// Score schema collection contains 5 attributes => name, reach scores, like scores, share score and comment scores(count of comment) 
// determine reach score between 1000 and 100000
const scoreSchema = new mongoose.Schema({
    name: String,
    reach: {type:Number, min:1000, max:100000},
    like: Number,
    share: Number,
    comment: Number,
}) 

// send modet of score to use in another file or folder
module.exports.Score = mongoose.model("score", scoreSchema);