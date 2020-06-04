const { User } = require('../models/index');

module.exports = {
  
  getAllUserEmails: async (req, res) => {
    try {
      const userEmail = await User.findOne({ email: req.query.email }, 'email');
      return res.status(200).json(userEmail);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
};






    