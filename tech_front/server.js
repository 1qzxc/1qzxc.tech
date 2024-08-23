const express = require("express");
const app = express();
const router = express.Router();
const path = __dirname + '/views/';
const request = require('request');
const fetch = require('cross-fetch');


//const path = require('path');

// reowrks using ejs + https://blog.logrocket.com/top-express-js-template-engines-for-dynamic-html-pages/ 
// remove public dir in order to render pages using EJS on the fly and send them
const publicDir = require('path').join(__dirname,'/views/public');
app.use(express.static(publicDir));

// on the differences between app.set,get,router.get : https://stackoverflow.com/questions/27227650/difference-between-app-use-and-router-use-in-express
app.set("view engine", "ejs");
app.set('views', path);


//app.get('/', (request, response) => { // he other hand, is part of Express' application routing and is intended for matching and handling a specific route when requested with the GET HTTP verb:
//  return response.send('OK');
//});
async function getArticles() {
  const response1 = await fetch(`http://strapimain:1337/articles`);
  const data = await response1.json();
  //console.log(data);
  //console.log(data[0].pictures);
  return data
}

async function getCategories() {
  const response1 = await fetch(`http://strapimain:1337/categories`);
  const data = await response1.json();
  //console.log(data);
  //console.log(data[0].pictures);
  return data
}

app.get('/', (request, response) =>  {

  response.render('pet', {
    subject: 'Study projects',
    entity: 'Study projects',
    link: 'https://google.com',
    focus: 'pet'
  });


});

app.get('/articles', async function (request, response, next)  {

  var articles = await getArticles();
  
  var categories = await getCategories();

  var articles2 = [
    { title: 'Whataver floats your boat', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: ['economy', 'politics', 'tech', 'my_thoughts'], imageURL: "https://dummyimage.com/900x400/ced4da/6c757d.jpg", date: "Jan 1 2021" },
    { title: 'Title 2', text: "some text for number 2", tags: ['economy', 'politics', 'tech', 'my_thoughts'], imageURL: "https://dummyimage.com/900x400/ced4da/6c757d.jpg", date: "Jan 1 2021" },
    { title: 'Title 3', text: "some text for number 3", tags: ['economy', 'politics', 'tech', 'my_thoughts'], imageURL: "https://dummyimage.com/900x400/ced4da/6c757d.jpg", date: "Jan 1 2021" }
  ];

    response.render('articles', {
    subject: 'Articles',
    entity: 'Articles',
    link: 'https://google.com',
    focus: 'articles',
    articles: articles, /* pass posts from database */
    categories: categories
  });
});

app.get('/videos', (request, response) => {
  response.render('videos', {
    subject: 'Videos',
    entity: 'Videos',
    link: 'https://google.com',
    focus: 'videos'
  });
});

app.get('/about', (request, response) => {
  response.render('about', {
    subject: 'about',
    entity: 'about',
    link: 'https://google.com',
    focus: 'about'
  });
});

app.get('/ansible', (request, response) => {
  response.render('ansible', {
    subject: 'ansible',
    entity: 'ansible',
    focus: 'pet'
  });
});

app.get('/nodejs-blogapp', (request, response) => {
  response.render('nodejs-blogapp', {
    subject: 'blogapp',
    entity: 'blogapp',
    focus: 'pet'
  });
});


app.get('/python-flask', (request, response) => {
  response.render('python-flask', {
    subject: 'flask',
    entity: 'flask',
    focus: 'pet'
  });
});

app.get('/sitik', (request, response) => {
  response.render('sitik', {
    subject: 'sitik',
    entity: 'sitik',
    focus: 'pet'
  });
});

app.get('/koareact', (request, response) => {
  response.render('koareact', {
    subject: 'koareact',
    entity: 'koareact',
    focus: 'pet'
  });
});

app.get('/jquery', (request, response) => {
  response.render('jquery', {
    subject: 'jquery',
    entity: 'jquery',
    focus: 'pet'
  });
});

app.get('/jenkins', (request, response) => {
  response.render('jenkins', {
    subject: 'jenkins',
    entity: 'jenkins',
    focus: 'pet'
  });
});


app.get('/grafana', (request, response) => {
  response.render('grafana', {
    subject: 'grafana',
    entity: 'grafana',
    focus: 'pet'
  });
});

app.get('/prometheus', (request, response) => {
  response.render('prometheus', {
    subject: 'prometheus',
    entity: 'prometheus',
    focus: 'pet'
  });
});


app.get('/home-lab', (request, response) => {
  response.render('home-lab', {
    subject: 'home-lab',
    entity: 'home-lab',
    focus: 'pet'
  });
});


app.get('/rvproxy', (request, response) => {
  response.render('rvproxy', {
    subject: 'rvproxy',
    entity: 'rvproxy',
    focus: 'pet'
  });
});

app.get('/kubernetes', (request, response) => {
  response.render('kubernetes', {
    subject: 'kubernetes',
    entity: 'kubernetes',
    focus: 'pet'
  });
});

app.get('/docker', (request, response) => {
  response.render('docker', {
    subject: 'docker',
    entity: 'docker',
    focus: 'pet'
  });
});

app.get('/vagrant', (request, response) => {
  response.render('vagrant', {
    subject: 'vagrant',
    entity: 'vagrant',
    focus: 'pet'
  });
});

app.get('/postgres', (request, response) => {
  response.render('postgres', {
    subject: 'postgres',
    entity: 'postgres',
    focus: 'pet'
  });
});

app.get('/python-linked', (request, response) => {
  response.render('python-linked', {
    subject: 'python-linked',
    entity: 'python-linked',
    focus: 'pet'
  });
});

app.get('/l2j', (request, response) => {
  response.render('l2j', {
    subject: 'l2j',
    entity: 'l2j',
    focus: 'pet'
  });
});

app.get('/gitlab', (request, response) => {
  response.render('gitlab', {
    subject: 'gitlab',
    entity: 'gitlab',
    focus: 'pet'
  });
});

app.get('/strapi', (request, response) => {
  response.render('strapi', {
    subject: 'strapi',
    entity: 'strapi',
    focus: 'pet'
  });
});

// https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js#:~:text=app.get%20is%20called%20when%20the%20HTTP%20method%20is,you%20access%20to.%20Difference%20between%20app.use%20%26%20app.get%3A
app.use("/",router); // <--- binging middleware, sets root path for 'app' and use router for subpaths 
//  limits the middleware to only apply to any paths requested that begin with it

//router.use(function (req,res,next) {  // <---- use chain of javascript functions on this path 
//  console.log("/" + req.method + "  req = " + req.ip);
//  next();
//});

//router.get("/",function(req,res){
//  res.sendFile(path + "index.ejs");
//});



router.get("/*",function(req,res){
  res.sendFile(path + "404.html");
});

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(8084,function(){
  console.log("Live at Port 8084");
});
