var express = require("express");
var router = express.Router();
const { client } = require("../db");

/* GET sport. */
router.get("/", async function (req, res, next) {
  try {
    const db = client.db("ecedashboard");
    const collections = await db.collection("sport").find().toArray();

    res.json(collections);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

/* POST sport. */
router.post("/", async function (req, res, next) {
  try {
    const db = client.db("ecedashboard");
    const result = await db.collection("sport").insertOne(req.body);

    res.json(result);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});


module.exports = router;
