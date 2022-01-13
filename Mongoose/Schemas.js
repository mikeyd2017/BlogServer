var mongoUtil = require('../utilities/mongoUtil');

const USER = mongoUtil.MONGOOSE.model('User', {
    name: { type: String },
    age: { type: Number }
});

const BLOG = mongoUtil.MONGOOSE.model('Blog', {
    owner: { type: String },
    title: { type: String },
    content: { type: String },
    datePosted: { type: Date },
    dateEdited: { type: Date }
});

module.exports = {
    USER,
    BLOG
};
