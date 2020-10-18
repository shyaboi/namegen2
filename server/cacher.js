const fs = require ('fs')
const words = require("../server/dict")
const path = require("path");
const express = require("express");
const app = express(); // express app

app.use(express.static("public"));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.post("/multi/:number", (req, res) => {

    let wordCache = []
    // console.log(wordCache)
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
        // console.log(wordCache)
    res.send(wordCache);
  });


  app.get("/1", (req, res) => {
    let wordCache = []
    // console.log(wordCache)
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
        // console.log(wordCache)
    res.send(wordCache);
  });


app.get("/10", (req, res) => {
    let wordCache = []
    // console.log(wordCache)
    for (let i = 0; i < 10; i++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
        // console.log(wordCache)
    }
    res.send(wordCache);
  });

  app.get("/100", (req, res) => {
    let wordCache = []
    // console.log(wordCache)
    for (let i = 0; i < 100; i++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
        // console.log(wordCache)
    }
    res.send(wordCache);
  });

  app.get("/1000", (req, res) => {
    let wordCache = []
    // console.log(wordCache)
    for (let i = 0; i < 1000; i++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
        // console.log(wordCache)
    }
    res.send(wordCache);
  });

  app.get("/10000", (req, res) => {
    let wordCache = []
    // console.log(wordCache)
    for (let i = 0; i < 10000; i++) {
        var randomWord = words[Math.floor(Math.random() * words.length)];
        wordCache.push(randomWord)
        // console.log(wordCache)
    }
    res.send(wordCache);
  });
  
  // start express server on port 5000
  app.listen(5000, () => {
    console.log("server started on port 5000");
  });