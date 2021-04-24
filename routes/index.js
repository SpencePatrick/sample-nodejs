
var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spence Title' });
});


router.get('/custom-meal-planner', function(req, res, next) {
  (async () => {
    try {
      const fetch = require("node-fetch");

      console.log("starting to fetch");
      const response = await fetch('https://www.allrecipes.com/recipe/22831/alfredo-sauce/');
      console.lot("response", response);
      const text = await response.text();
      console.log("text", text);
      const dom = await new JSDOM(text);
      const ingredientsSection = dom.window.document.querySelector(".ingredients-section").textContent
      console.log(dom.window.document.querySelector(".ingredients-section").textContent);
      console.log('document', document);
      document.querySelector("#ingredient-section").appendChild(ingredientsSection);
    } catch(err) {
      console.log(err);
    }
    
  });
  res.render('meal-plan', { 
    title: 'Meal-Plan Page'
  })()
});

module.exports = router;
