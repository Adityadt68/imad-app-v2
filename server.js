var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title : 'Article One | ANS',
    heading : 'Article One',
    date : 'sep 5 2015',
    Contents : `<p>
                This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page.
            </p>
            <p>
                This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page.
            </p>
            <p>
                This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page.
            </p>
            <p>
                This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page. This is the body of Article-One I have specidfied here my body contents of HTML page.
            </p>`
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res){

	res.send(createTemplate(articleOne));
});

app.get('/article-second', function(req,res){

	res.sendFile(path.join(__dirname, 'ui', 'article-second.html'));
});

app.get('/article-third', function(req,res){

	res.sendFile(path.join(__dirname, 'ui', 'article-third.html'));
});

function createTemplate(data){
   var  bodyContent = data.Contents;
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var htmlTemplate = `<html>
    <head>
        <title>
           ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <div>
            ${date}
        </div>
        <h3>
            ${heading}
        </h3>
        <div>
            ${bodyContent}
        </div>
        </div>
    </body>
    
</html>`

return htmlTemplate;
    
}

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
