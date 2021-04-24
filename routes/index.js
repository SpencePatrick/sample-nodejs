
var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spence Title' });
});


router.get('/custom-meal-planner', function(req, res, next) {
  console.log('going in');
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  await page.goto('https://www.allrecipes.com/recipe/22831/alfredo-sauce/');
  console.log("page", page);  
  res.render('meal-plan', { 
    title: 'Meal-Plan Page'
  });
});

module.exports = router;
