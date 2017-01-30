"use strict";

const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if(err) {
    console.log(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  //Conneceted to the test-tweets db
  console.log(`Connected to mongodb: ${MONGODB_URI}`);


  // Refactored and wrapped as new, tweet-specific function:

  function getTweets(callback) {
    db.collection("tweets").find().toArray(callback);
  }

  //calling getTweets
  getTweets((err, tweets) => {
    if (err) throw err;

    console.log("Logging each tweet");
    for (let tweet of tweets) {
      console.log(tweet);
    }
    db.close();
  });

})
