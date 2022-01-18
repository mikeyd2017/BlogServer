var express = require('express');
var router = express.Router();
var schemas = require('../Mongoose/Schemas');

router.post('/create', function(req, res, next) {
    var new_blog = new schemas.BLOG({
        owner: req.body.blog.owner,
        title: req.body.blog.title,
        content: req.body.blog.content,
        datePosted: req.body.blog.datePosted,
        dateEdited: req.body.blog.dateEdited
    });

    new_blog.save(function(err, blog) {
        if (err) {
            res.status(500).json({ message: 'fail' });
        } else {
            res.status(200).json({
                success: true,
                blog: blog
            });
        }
    });
});

router.get('/all', function(req, res) {
    schemas.BLOG.find({}, function(err, blogs) {
        if (err) {
            res.status(500).json({ message: err });
        } else {
            res.status(200).json({
                success: true,
                blogs: blogs
            });
        }
    });
});

router.get('/:id', function(req, res) {
    schemas.BLOG.findById(req.params.id, function (err, blog) {
        if (err) {
            res.status(500).json({ message: err });
        } else {
            res.status(200).json({
                success: true,
                blog: blog
            });
        }
    });
});

module.exports = router;