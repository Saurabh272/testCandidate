const db = require('../config/database');

class Question {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM Questions');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM Questions WHERE id = ?', [id]);
    return rows[0];
  }
}

module.exports = Question;