var Request = require("request");
    express= require("express");
    app = express();
    const port = process.env.PORT || 5656
    const htt = "http://localhost:3000/users"
Request.get(htt, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});

Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:3000/users",
    "body": JSON.stringify({
        "name": "Eliza",
        "age": "26",
        "email" : "eliza_lll@hotmail.com"
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});
app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });