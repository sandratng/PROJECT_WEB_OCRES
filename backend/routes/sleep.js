var express = require("express");
var router = express.Router();
const { client } = require("../db");



/* GET sleep. */
router.get("/days/:amount", async function (req, res) {
  try {
    const db = client.db("ecedashboard");
    const limit = parseInt(req.params.amount)
    const collections = await db.collection("sleep").find().sort({date: -1}).limit(limit).toArray();

    res.json(collections);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

/* POST sleep. */
router.post("/", async function (req, res) {
  console.log({body: req})
  try {
    const db = client.db("ecedashboard");
    const result = await db.collection("sleep").insertOne(req.body);

    res.json(result);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});


module.exports = router;
