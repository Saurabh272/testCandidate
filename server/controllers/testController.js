const Test = require('../models/Test');

exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.getAll();
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tests', error });
  }
};

exports.getTestById = async (req, res) => {
  try {
    const test = await Test.getById(req.params.id);
    if (test) {
      res.json(test);
    } else {
      res.status(404).json({ message: 'Test not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching test', error });
  }
};

exports.createTest = async (req, res) => {
  try {
    const { name } = req.body;
    const testId = await Test.create(name);
    res.status(201).json({ id: testId, name });
  } catch (error) {
    res.status(500).json({ message: 'Error creating test', error });
  }
};

// Add more controller methods as needed