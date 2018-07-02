const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");



// Sets up the Express app to handle data parsing
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("../routing/apiRoutes.js")(app);
require("../routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });