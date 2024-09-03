const express = require("express");
const app = express();
const router = express.Router();
const path = __dirname + '/views/';
const request = require('request');
const fetch = require('cross-fetch');

const hostname = require('./config.js');
console.log(" const hostname = " + hostname);

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

async function getProjects() {
  const response1 = await fetch(`http://strapimain:1337/projects`);
  const data = await response1.json();
  //console.log(data);
  //console.log(data[0].pictures);
  return data
}

async function getProject(id) {
  const response1 = await fetch(`http://strapimain:1337/projects/`+ id);
  const data = await response1.json();
  //console.log(data);
  //console.log(data[0].pictures);
  return data
}

async function getArticle(id) {
  const response1 = await fetch(`http://strapimain:1337/articles/`+ id);
  const data = await response1.json();
  //console.log(data);
  //console.log(data[0].pictures);
  return data
}


app.get('/', async function (request, response, next)  {

  var categories = await getCategories();

  var projects = await getProjects();

  response.render('projects', {
    subject: 'Study projects',
    entity: 'Study projects',
    link: 'https://google.com',
    focus: 'projects',
    categories: categories,
    projects: projects
  });
});


app.get('/articles', async function (request, response, next)  {

  var articles = await getArticles();
  
  var categories = await getCategories();

    response.render('articles', {
    subject: 'Articles',
    entity: 'Articles',
    link: 'https://google.com',
    focus: 'articles',
    articles: articles, /* pass posts from database */
    //html: html,
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



//router.get("/*",function(req,res){
//  res.sendFile(path + "404.html");
//});

router.get('/:id', async function (request, response, next)  {
  //id = request.id

  console.log("request.params.id is: ");
  console.log(request.params.id);

  var project = await getProject(request.params.id);
  const markdownItClass = require('markdown-it-class');
  const md = require("markdown-it")({ html: true }).use(markdownItClass, {
    h1: ['text-2xl', 'font-bold', 'mb-3', 'text-blue-700'],
    p: ['fs-5', 'mb-4'],
    img: ['img-fluid', 'rounded', 'shadow-lg','p-3', 'mb-5','bg-body']
  });


  const html = md.render(project.text);

  response.render('project', {
    subject: 'Study projects',
    entity: 'Study projects',
    link: 'https://google.com',
    focus: 'projects',
    id: request.params.id,
    title: project.title,
    date: project.date,
    text: project.text,
    html: html,
    project: project
  });
});


router.get('/article/:id', async function (request, response, next)  {
  //id = request.id

  console.log("request.params.id is: ");
  console.log(request.params.id);

  var article = await getArticle(request.params.id);
  const markdownItClass = require('markdown-it-class');
  const md = require("markdown-it")({ html: true }).use(markdownItClass, {
    h1: ['text-2xl', 'font-bold', 'mb-3', 'text-blue-700'],
    p: ['fs-5', 'mb-4'],
    img: ['img-fluid', 'rounded', 'shadow-lg','p-3', 'mb-5','bg-body']
  });


  const html = md.render(article.text);

  response.render('article', {
    subject: 'article',
    entity: 'article',
    link: 'https://google.com',
    focus: 'articles',
    id: request.params.id,
    title: article.title,
    date: article.date,
    text: article.text,
    html: html,
    article: article
  });
});



//app.use("*",function(req,res){
//  res.sendFile(path + "404.html");
//});

app.listen(8084,function(){
  console.log("Live at Port 8084");
});

