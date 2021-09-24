const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Topic = require("../models/Topic");

router.get("/react", async (req, res) => {
  try {
    const topic = await Topic.find({ name: "React" });
    res.json({ topic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});
router.get("/react/subtop", async (req, res) => {
  try {
    const topic = await Topic.find({ name: "React" }).select("subTopic");
    res.json({ topic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});
router.get("/express/subtop", async (req, res) => {
  try {
    const topic = await Topic.find({ name: "Express" }).select("subTopic");
    res.json({ topic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});
router.get("/mongo/subtop", async (req, res) => {
  try {
    const topic = await Topic.find({ name: "MongoDB" }).select("subTopic");
    res.json({ topic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});
router.get("/node/subtop", async (req, res) => {
  try {
    const topic = await Topic.find({ name: "Node" }).select("subTopic");
    res.json({ topic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

router.get("/express", async (req, res) => {
  try {
    const topic = await Topic.find({ name: "Express" });
    res.json({ topic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

router.get("/mongo", async (req, res) => {
  try {
    const topic = await Topic.find({ name: "MongoDB" });
    res.json({ topic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

router.get("/node", async (req, res) => {
  try {
    const topic = await Topic.find({ name: "Node" });
    res.json({ topic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});
module.exports = router;
