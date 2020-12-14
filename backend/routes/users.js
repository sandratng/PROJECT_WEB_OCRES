var express = require("express");
var router = express.Router();
const { client } = require("../db");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* POST users. */
router.post("/", async function (req, res) {
  try {
    const db = client.db("ecedashboard");
    const result = await db.collection("users").insertOne(req.body);

    res.json(result);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});
/*GET users */
router.get("/", async function (req, res) {
  try {
    const db = client.db("ecedashboard");
    
    const collections = await db.collection("users").find().sort({_id: -1}).toArray();
 
    res.json(collections);

  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

/* DELETE users. */
router.delete("/:nom", async function (req, res, next) {
  try {
    const db = client.db("ecedashboard");
    const collections = await db.collection("users").deleteOne({_id: new mongodb.ObjectID(req.params.nom)});

    res.json(collections);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});
module.exports = router;







