const MONGOOSE = require('mongoose');

// MONGOOSE.connect('mongodb+srv://admin:blogadmin@cluster0.cdk4d.mongodb.net/main?authSource=admin&replicaSet=atlas-ramf0b-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

MONGOOSE.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    MONGOOSE
};