var express = require('express');
var router = express.Router();
var schemas = require('../Mongoose/Schemas');

router.get('/createuser', function(req, res, next) {
  var new_user = new schemas.USER({
    name: 'Michael',
    age: 23,
    email: 'dambrosiomichael@rocketmail.com'
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

router.get('/:id', function(req, res) {
  return schemas.USER.findById(req.params.id, function(err, user) {
    if (err) {
        res.status(500).json({ message: err});
    } else {
        res.status(200).json({ message: user});
    }
  });
});

module.exports = router;
