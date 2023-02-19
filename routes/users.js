var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  
  if (id == '1') {
  res.render('recipe', {
    title: "Krispy Pizza, oh my!",
    img: , 
    desc: 

});

} else {

}
});

module.exports = router;
