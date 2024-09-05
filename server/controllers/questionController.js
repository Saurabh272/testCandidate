const Question = require('../models/Question');

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.getAll();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.getById(req.params.id);
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ message: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching question', error });
  }
};