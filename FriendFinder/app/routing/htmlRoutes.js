// Dependencies
// =============================================================
const connection = require("../server.js");

// Routes

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
//   });
  
// app.get("/all", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });
  
// =============================================================
module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
      });
      
    app.get("/all", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
      });
};



