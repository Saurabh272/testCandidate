exports.getTestResults = async (req, res) => {
  try {
    const { testId, profileId } = req.params;
    res.json({ message: 'Results retrieved successfully', testId, profileId });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving results', error });
  }
};