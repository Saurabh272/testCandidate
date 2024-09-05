const db = require('../config/database');

class Answer {
  static async create(testId, questionId, profileId, answer) {
    const [result] = await db.query(
      'INSERT INTO Answers (test_id, question_id, profile_id, answer) VALUES (?, ?, ?, ?)',
      [testId, questionId, profileId, answer]
    );
    return result.insertId;
  }
}

module.exports = Answer;