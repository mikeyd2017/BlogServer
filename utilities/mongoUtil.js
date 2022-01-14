// const {MongoClient} = require('mongodb');
// const uri = 'mongodb+srv://BlogServer:BlogAdmin@cluster0.cdk4d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// var _db;

// module.exports = {
    
//     connectToServer: function (callback) {
//         MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
//           _db = client.db('test_db');
//           return callback(err);  
//         });
//     },

//     getDb: function() {
//         return _db;
//     }
// }
const MONGOOSE = require('mongoose');

MONGOOSE.connect('mongodb+srv://admin:blogadmin@cluster0.cdk4d.mongodb.net/main?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {
    MONGOOSE
};