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
    console.log("Hello World");
    const dbc = client.db("ecedashboard");
    const collections = await dbc.collection("bank").find().toArray();
    
    if(collections){
      const test=collections[collections.length-1];
      if(test){
        req.body.solde=test.solde+req.body.solde;
        req.body.debit=test.debit+req.body.debit;
        req.body.credit=test.credit+req.body.credit;
      }
    }

    const db = client.db("ecedashboard");
    const result = await db.collection("bank").insertOne(req.body);

    res.json(result);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});


module.exports = router;
