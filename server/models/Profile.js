const db = require('../config/database');

class Profile {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM Profiles');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM Profiles WHERE id = ?', [id]);
    return rows[0];
  }

}

module.exports = Profile;