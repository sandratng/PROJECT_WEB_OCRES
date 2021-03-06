var express = require("express");
var router = express.Router();
const { client } = require("../db");

/* GET grades. */
router.get("/", async function (req, res) {
  try {
    const db = client.db("ecedashboard");
    const collections = await db.collection("grades").find().sort({semester: -1}).toArray();

    res.json(collections);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

/* POST grades. */
router.post("/", async function (req, res) {
  try {
    const db = client.db("ecedashboard");
    const result = await db.collection("grades").insertOne(req.body);

    res.json(result);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

/* DELETE grades. */
router.delete("/delete", async function (req, res, next) {
  try {
    const db = client.db("ecedashboard");
    const collections = await db.collection("grades").remove({});

    res.json(collections);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});


module.exports = router;
