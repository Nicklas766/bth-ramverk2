/**
 * Connect to the database with "mongodb" as route
 */
"use strict";

// MongoDB
const mongo = require("mongodb").MongoClient;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/people";
var ObjectId = require('mongodb').ObjectID;
// Express server
const express = require("express");
var router = express.Router();


// Return a JSON object with list of all documents within the collection.
router.get("/get", async (req, res) => {
    try {
        const data = await fetchArtists(dsn);

        console.log(data);
        res.json(data);
    }    catch (err) {
        console.log(err);
        res.json(err);
    }
});

// Inserts a JSON object to our list
router.post("/insert", async (req, res) => {
    var item = {
        name: req.body.name,
        wikipedia: req.body.wikipedia,
        youtube: req.body.youtube
    };

    try {
        const data = await insertArtist(dsn, item);

        res.json(data);
    }    catch (err) {
        console.log(err);
        res.json(err);
    }
});

// Inserts a JSON object to our list
router.post("/update", async (req, res) => {
    var item = {
        name: req.body.name,
        wikipedia: req.body.wikipedia,
        youtube: req.body.youtube
    };

    try {
        const data = await updateArtist(dsn, req.body.id, item);

        res.json(data);
    }    catch (err) {
        console.log(err);
        res.json(err);
    }
});

// Inserts a JSON object to our list
router.post("/delete", async (req, res) => {
    try {
        console.log("deleted" + req.body.id);
        const data = await deleteArtist(dsn, req.body.id);

        res.json(data);
    }    catch (err) {
        console.log(err);
        res.json(err);
    }
});

// // Startup server and liten on port
// router.listen(port, () => {
//     console.log(`Server is listening on ${port}`);
//     console.log(`DSN is: ${dsn}`);
// });

/**
 * Insert an artist to the "artist-data" collection
 *
 * @async
 *
 * @param {string} dsn        DSN to connect to database.
 * @param {object} item       JSON-object of artist attributes
 *
 * @throws Error when database operation fails.
 *
 * @return {Promise<array>} The resultset as an array.
 */

async function insertArtist(dsn, item) {
    const db  = await mongo.connect(dsn);
    const col = await db.collection('artists');
    const res = await col.insertOne(item);

    await db.close();

    return res;
}

/**
 * Insert an artist to the "artist-data" collection
 *
 * @async
 *
 * @param {string} dsn        DSN to connect to database.
 * @param {object} item       JSON-object of artist attributes
 *
 * @throws Error when database operation fails.
 *
 * @return {Promise<array>} The resultset as an array.
 */

async function updateArtist(dsn, id, item) {
    const db  = await mongo.connect(dsn);
    const col = await db.collection('artists');
    const res = await col.update({  _id: ObjectId(id) }, { $set: item });

    await db.close();

    return res;
}

/**
 * Gets all the artists
 *
 * @async
 *
 * @param {string} dsn        DSN to connect to database.
 *
 * @throws Error when database operation fails.
 *
 * @return {Promise<array>} The resultset as an array.
 */

async function fetchArtists(dsn) {
    const db  = await mongo.connect(dsn);
    const col = await db.collection('artists');
    const res = await col.find({}).toArray();

    await db.close();
    return res;
}


/**
 * Gets all the artists
 *
 * @async
 *
 * @param {string} dsn        DSN to connect to database.
 *
 * @throws Error when database operation fails.
 *
 * @return {Promise<array>} The resultset as an array.
 */

async function deleteArtist(dsn, id) {
    const db  = await mongo.connect(dsn);
    const col = await db.collection('artists');
    const res = await col.remove({ _id: ObjectId(id) });

    await db.close();
    return res;
}

module.exports = router;
