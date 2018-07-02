const friends = require("./app/data/friends.js");


module.exports = function(app) {
    
    app.get("/api/friends/", function(req, res) {
       // var chosen = req.params.friend;
        console.log(res);
       // console.log(chosen);
        return res.json(friends);
  
        
        //return res.json(false);
    });
  
// Displays a single friend, or returns false
    app.get("/api/friends/:friend", function(req, res) {
        var chosen = req.params.friend;
  
        console.log(chosen);
  
        for (var i = 0; i < friends.length; i++) {
              if (chosen === friends[i].routeName) {
                 return res.json(friends[i]);
            }
        }
  
        return res.json(false);
    });

   
  // Create New friends - takes in JSON input
     app.post("/api/friends", function(req, res) {
         var newfriend = req.body;
         newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  
         console.log(newfriend);
  
         friends.push(newfriend);
  
         res.json(newfriend);
     });

    };
    
  