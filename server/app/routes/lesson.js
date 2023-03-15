const express = require('express');
const router = express.Router();
const Lesson = require('../models/lesson');

// 获取所有课程信息
router.get('/', async (req, res) => {
  try {
    const lessons = await Lesson.find({});
    res.json(lessons);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

// 新增课程信息
router.post('/', async (req, res) => {
  try {
    const lesson = new Lesson({
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
    });
    await lesson.save();
    res.json(lesson);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

// 更新课程信息
router.put('/:id', async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
      },
      { new: true }
    );
    res.json(lesson);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

// 删除课程信息
router.delete('/:id', async (req, res) => {
  try {
    const lesson = await Lesson.findByIdAndRemove(req.params.id);
    res.json(lesson);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
