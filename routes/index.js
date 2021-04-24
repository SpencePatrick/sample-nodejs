
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spence Title' });
});


router.get('/custom-meal-planner', function(req, res, next) {
  (async () => {
    const response = await fetch('https://www.allrecipes.com/recipe/22831/alfredo-sauce/');
    const text = await response.text();
    const dom = await new JSDOM(text);
    const ingredientsSection = dom.window.document.querySelector(".ingredients-section").textContent
    console.log(dom.window.document.querySelector(".ingredients-section").textContent);
    res.render('meal-plan', { 
      title: 'Meal-Plan Page',
      ingredientsSection: ingredientsSection
  });

  })()
});

module.exports = router;
