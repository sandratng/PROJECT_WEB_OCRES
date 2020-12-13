var express = require("express");
var router = express.Router();
const { client } = require("../db");
const mongodb = require("mongodb");

/* GET todotlist. */
router.get("/", async function (req, res, next) {
  try {
    const db = client.db("ecedashboard");
    const collections = await db.collection("todotlist").find().toArray();

    res.json(collections);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

/* GET todotlist. */
router.get("/todo/:amount", async function (req, res, next) {
  try {
    const db = client.db("ecedashboard");
    const limit = parseInt(req.params.amount)
    const collections = await db.collection("todotlist").find().sort({_id: -1}).limit(limit).toArray();

    res.json(collections);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

/* GET todotlist. */
router.delete("/:id", async function (req, res, next) {
  try {
    const db = client.db("ecedashboard");
    const collections = await db.collection("todotlist").deleteOne({_id: new mongodb.ObjectID(req.params.id)});

    res.json(collections);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

/* POST todotlist. */
router.post("/", async function (req, res, next) {
  try {
    const db = client.db("ecedashboard");
    const result = await db.collection("todotlist").insertOne(req.body);

    res.json(result);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});


module.exports = router;
