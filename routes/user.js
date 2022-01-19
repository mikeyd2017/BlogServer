var express = require('express');
var router = express.Router();
var schemas = require('../Mongoose/Schemas');

router.post('/create', function(req, res, next) {
  var new_user = new schemas.USER({
    name: req.body.user.name,
    age: req.body.user.age,
    email: req.body.user.email
  });

  new_user.save(function(err, user) {
      if (err) {
          res.status(500).json({ message: 'User Save Failed ;c!'});
      } else {
          res.status(200).json({
            success: true,
            user: user
          });
      }
  });
});

router.get('/:id', function(req, res) {
  schemas.USER.findById(req.params.id, function(err, user) {
    if (err) {
        res.status(500).json({ message: err});
    } else {
        res.status(200).json({
          success: true,
          user: user
        });
    }
  });
});

module.exports = router;
