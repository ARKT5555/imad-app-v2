var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
   user: 'arkt5555',
   database: 'arkt5555',
   host: 'db.imad.hasura-app.io',
   port: '5432',
   password: process.env.DB_PASSWORD,
};
var app = express();
app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:page', function (req, res) {
  pool.query('SELECT * FROM articles WHERE title=$1', [req.params.page
                                                 ], function(err, result) {
    if (err) {
 
    }
    else
    {
      res.send(JSON.);
    }
  }) 
  res.sendFile(path.join(_dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
