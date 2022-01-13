var express = require('express');
var router = express.Router();

// router.post('/blogs/')
router.get('/blogs/:id', function(req, res) {
    return blogs.findOne({ id: req.params.id }, function (err, post) {
        if (err) { throw(err); }
            return res.render('blog', {title: post.title, url: post.URL
        });
    })
});