var mongoUtil = require('../utilities/mongoUtil');

const USER = mongoUtil.MONGOOSE.model('User', {
    name: { type: String },
    age: { type: Number }
});

module.exports = {
    USER
};
