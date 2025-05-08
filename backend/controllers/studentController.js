const Student = require('../models/studentModel');
const validateStudent = require('../utils/validateStudent');

exports.getAllStudents = (req, res) => {
  Student.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getStudentById = (req, res) => {
  Student.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.createStudent = (req, res) => {
  const errors = validateStudent(req.body);
  if (Object.keys(errors).length > 0) return res.status(400).json({ errors });

  Student.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

exports.updateStudent = (req, res) => {
  const errors = validateStudent(req.body);
  if (Object.keys(errors).length > 0) return res.status(400).json({ errors });

  Student.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: req.params.id, ...req.body });
  });
};

exports.deleteStudent = (req, res) => {
  Student.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Deleted successfully' });
  });
};
