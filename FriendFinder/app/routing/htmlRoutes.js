// Dependencies
// =============================================================
const path = require("path");

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
      console.log(req)
        res.sendFile(path.join(__dirname, "./app/public/survey.html"));
      });
      
    app.get("/all", function(req, res) {
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
      });
  };

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./app/public/home.html"));
});



