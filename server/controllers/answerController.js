const Answer = require('../models/Answer');

exports.submitAnswer = async (req, res) => {
  try {
    const { testId, questionId, profileId, answer } = req.body;
    const answerId = await Answer.create(testId, questionId, profileId, answer);
    res.status(201).json({ id: answerId, message: 'Answer submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting answer', error });
  }
};