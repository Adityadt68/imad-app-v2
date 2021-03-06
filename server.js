var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    "article-one" : {
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
    },
    "article-second" : {
        title : 'Article Second | ANS',
        heading : 'Article Second',
        date : 'sep 5 2016',
        Contents : `<p>
                    This is the body of Article-Second I have specidfied here my body contents of HTML page. 
                </p>`
    },
    "article-third" : {
        title : 'Article Third | ANS',
        heading : 'Article Third',
        date : 'august 14 2016',
        Contents : `<p>
                    This is the body of Article-Third I have specidfied here my body contents of HTML page. 
                </p>`
        
    }
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){

    var articleName = req.params.articleName;
	res.send(createTemplate(articles[articleName]));
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

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});



app.get('/ui/bus2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bus2.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
