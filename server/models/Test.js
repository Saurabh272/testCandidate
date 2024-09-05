const db = require('../config/database');

class Test {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM Tests');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM Tests WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(name) {
    const [result] = await db.query('INSERT INTO Tests (name) VALUES (?)', [name]);
    return result.insertId;
  }
}

module.exports = Test;