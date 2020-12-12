var express = require("express");
var router = express.Router();
const { client } = require("../db");

/* GET bank. */
router.get("/", async function (req, res, next) {
  try {
    const db = client.db("ecedashboard");
    const collections = await db.collection("bank").find().toArray();

    res.json(collections);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

/* POST bank. */
router.post("/", async function (req, res, next) {
  try {

    const db = client.db("ecedashboard");
    const result = await db.collection("bank").insertOne(req.body);

    res.json(result);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});


module.exports = router;
