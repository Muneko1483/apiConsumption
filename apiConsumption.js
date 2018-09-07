var request = require("request");
    express= require("express");
    app = express();
    const port = process.env.PORT || 5656
    

app.get('/users',(req,res) =>{
    request.get("http://localhost:3000/users",(error,response,body) => {
        res.status(200).send(JSON.parse(body));
        console.log(JSON.parse(body));
})
});

app.post('/users',(req,res) =>{
    request.post({url :'http://localhost:3000/users',
    "body": JSON.parse(body)({
            name:'Tadeo',
            age : '34',
            email :'tadeo@jdjdj'
        })
     },(error, response, body) => {
        res.status(200).send(JSON.parse(body));
        console.dir(JSON.parse(body));
    })
      });
  
app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });