var express = require('express');
var router = express.Router();
var schemas = require('../Mongoose/Schemas');

router.get('/createuser', function(req, res, next) {
  var new_user = new schemas.USER({
    name: 'Manish',
    age: 34
  });

  new_user.save(function(err, result) {
      if (err) {
          console.log(err);
          res.status(500).json({ message: 'User Save Failed ;c!'});
      } else {
          console.log(result);
          res.status(200).json({ message: 'User Saved!'});
      }
  });
});

module.exports = router;
