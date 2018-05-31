var express = require("express");
var router = express.Router();
var db = require("../models");


router.get("/", function(req, res) {
  res.redirect("/posts");
});

// ROUTER GET - to pull previous POSTS
    router.get("/posts", function(req, res) {
      db.Post.findAll({
        include: [db.Fan],
          title: [
            ["post_title", "ASC"]
        ]

        }) .then(function(dbPost) {
          var hbsObject = {
              post: dbPost,
          };
          return res.render("trash-index", hbsObject);
        });
    });

// ROUTER POST - Sends data to the db & tables
    router.post("/posts/create", function(req, res) {
      db.Post.create({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        fan_name: req.body.fan_name,
        team_name: req.body.team_name,
      })
      
        .then(function(dbPost) {
          console.log("testing" + dbPost);
          res.redirect("/");
        });
    });

module.exports = router;