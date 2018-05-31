var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");


var app = express();
  app.use(express.static("public"));
  app.use(express.static("public/assets/images/teams"));
  app.use(bodyParser.urlencoded({
    extended: false
}));

var exphbs = require("express-handlebars");
  app.engine("handlebars", exphbs({
    defaultLayout: "trash-main"
}));
    app.set("view engine", "handlebars");

var routesTrash = require("./controllers/fanPosts_controller");
app.use(routesTrash);

var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
