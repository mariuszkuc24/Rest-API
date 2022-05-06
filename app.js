
var express = require("express");
var app = express();
app.get("/url", (req, res, next) => {
    res.json(["To","jest","proste","REST","API"]);
   });
app.listen(3003, () => {
 console.log("Server running on port 3002");
});