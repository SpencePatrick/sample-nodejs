
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spence Title' });
});


router.get('/custom-meal-planner', function(req, res, next) {
  console.log('going in');
  (async () => {
    try {
      console.log('in line flin');
    } catch (err) {
      console.log(err);
    }
    
  })();
  console.log("out like flout");
  res.render('meal-plan', { 
    title: 'Meal-Plan Page'
  });
});

module.exports = router;
