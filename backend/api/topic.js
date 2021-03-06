const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Topic = require("../models/Topic");
const { check, validationResult } = require("express-validator");
const checkObjectId = require("../middleware/CheckObjectId");

router.post(
  "/",
  [check("name", "name is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array });
    }
    const { name, icon, subTopic } = req.body;
    try {
      let topic = await Topic.findOne({ name });
      if (topic) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Topic already exists" }] });
      }
      topic = new Topic({
        name,
        icon,
        subTopic,
      });

      await topic.save();
      res.json({ msg: "done" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const topic = await Topic.find().select("name");
    res.json({ topic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params.id;
  try {
    const topic = await Topic.findOne(id);
    if (!topic) {
      res.status(404).json({ msg: "Doesn't exist" });
    }
    res.json({ topic });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

router.put("/completed/:id", auth, checkObjectId("id"), async (req, res) => {
  const topic = await Topic.findOne({ "subTopic.id": req.params.id });
  try {
    topic.subTopic.forEach(async (subtop) => {
      console.log(subtop.id);
      if (subtop.id == req.params.id) {
        console.log("going in");
        if (
          subtop.completed.some(
            (completed) => completed.user.toString() === req.user.id
          )
        ) {
          return res.status(400).json({
            msg: "subtopic already done",
            completed: subtop.completed,
          });
        } else {
          subtop.completed.unshift({ user: req.user.id });
          console.log(subtop.completed);
          await topic.save();
          return res.json(subtop.completed);
        }
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
