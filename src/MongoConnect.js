
const mongo = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectID;
/**
* mongoConnect
*
* Returns object with async functions for mongoDB actions.
*
* @param {string} dsn               DSN to connect to database.
* @param {string} collection        The collection to connect to
*
* @return {object}                  the functions
*
* Examples how to use:
*
const db = require('../src/MongoConnect.js').mongoConnect(dsn, 'artists');

// insert
const info = await db.insert(item);
// fetch new data
const data = await db.fetch();
*
*
*
*/
const mongoConnect = (dsn, collection) => {
    // Connect and return collection
    const connect = async () => {
        const db  = await mongo.connect(dsn);
        const col = await db.collection(collection);

        return col;
    };

    /* Return async functions for mongoDB actions */
    return {
        async fetch(search = {}) {
            const col = await connect();

            return col.find(search).toArray();
        },
        async insert(item) {
            const col = await connect();

            return col.insert(item);
        },
        async update(id, item) {
            const col = await connect();

            return col.update({  _id: ObjectId(id) }, { $set: item });
        },
        async remove(id) {
            const col = await connect();

            return col.remove({ _id: ObjectId(id) });
        }
    };
    // await db.close();
};

module.exports = { mongoConnect };
