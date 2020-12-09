var express = require("express");
var router = express.Router();
const { client } = require("../db");

/* GET sleep. */
router.get("/", async function (req, res, next) {
  try {
    const db = client.db("ecedashboard");
    const collections = await db.collection("sleep").find().toArray();

    res.json(collections);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

/* POST sleep. */
router.post("/", async function (req, res, next) {
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
