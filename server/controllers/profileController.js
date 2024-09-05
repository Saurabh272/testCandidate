const Profile = require('../models/Profile');

exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.getAll();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profiles', error });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const profile = await Profile.getById(req.params.id);
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: 'Profile not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error });
  }
};