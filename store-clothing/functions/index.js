const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors")({ origin: true });
const bodyParser = require("body-parser");

admin.initializeApp(functions.config().firebase);

exports.stripeReq = functions.https.onRequest((req, res) => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(500).json({
        message: "Only POST requst allowed",
      });
    }
    const stripe = require("stripe")(functions.config().stripe.testkey);
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    };
    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send({ error: stripeErr });
      } else {
        res.status(200).send({ success: stripeRes });
      }
    });
  });
});
