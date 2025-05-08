const db = require('../config/db');

const Student = {
  getAll: (callback) => {
    db.query('SELECT * FROM students', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM students WHERE id = ?', [id], callback);
  },

  create: (student, callback) => {
    const { name, email, course, address, mobile, dob } = student;
    db.query(
      'INSERT INTO students (name, email, course, address, mobile, dob) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, course, address, mobile, dob],
      callback
    );
  },

  update: (id, student, callback) => {
    const { name, email, course, address, mobile, dob } = student;
    db.query(
      'UPDATE students SET name=?, email=?, course=?, address=?, mobile=?, dob=? WHERE id=?',
      [name, email, course, address, mobile, dob, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM students WHERE id=?', [id], callback);
  }
};

module.exports = Student;
