var express = require("express");
var router = express.Router();
const { client } = require("../db");

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
