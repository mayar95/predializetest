const Guarantee = require('../models/guarantee');

exports.getGuarantee = async (req, res) => {
  try {
      const guarantee = await Guarantee.find({});
      return res.status(200).json(guarantee);
  } catch (err) {
    return res.status(500).json(err);
  }
};
