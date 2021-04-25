
var express = require('express');
var router = express.Router();
var phantom = require('phantom');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spence Title' });
});


router.get('/custom-meal-planner', function(req, res, next) {
  console.log('going in');
  (async () => {
    try {
      console.log('in line flin');
      phantom.create(function (ph) {
        ph.createPage(function (page) {
          var url = "http://www.bdtong.co.kr/index.php?c_category=C02";
          page.open(url, function() {
            page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
              page.evaluate(function() {
                $('.listMain > li').each(function () {
                  console.log($(this).find('a').attr('href'));
                });
              }, function(){
                ph.exit()
              });
            });
          });
        });
      });
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
