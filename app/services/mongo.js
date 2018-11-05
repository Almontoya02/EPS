// SERVICIO PARA CONECTAR A MONGODB
const mongo = require('mongodb')

module.exports = {
    Mongo: function () {
        return new MongoCrud();
    }
}

class MongoCrud {
    constructor() {

    }

    connection() {
        // Connection to db
        const url = 'mongodb://localhost:27017';
        // Database Name
        const dbName = 'Hospital';
        const Client = mongo.MongoClient;
        var connection = new Client(url)
        connection.connect(function (err) {
            console.log("Connected successfully to server");
            const db = connection.db(dbName);
            const col = db.collection('users');
            // Get first two documents that match the query
            col.find({}).toArray(function (err, docs) {
                console.log(docs);
                connection.close();
            });
            connection.close();
        });
    }

    showHello() {
        return 'Hello '
    }
}
