const request = require('request');

const url = "http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees"

request(url, { json: true }, (err, res, body)=> {
  if(err){return console.log("unable to connect server")}
  else if(res.body.err){return console.log("invalid URL")}
  else
   console.log(body);
   console.log("Name: " + body[1].name);
   console.log("Id: " + body[1].id);
   console.log("Created at: " + body[1].createdAt);
});

