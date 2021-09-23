const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Topic = require("../models/Topic");
const { check, validationResult } = require("express-validator");

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
module.exports = router;
