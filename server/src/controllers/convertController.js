const convertService = require("../services/convertService");

const handlePostRequest = (req, res) => {
  const { number } = req.body;

  const converted = convertService.convertRomanToArabNumbers(number);

  res.status(200).json({ result: converted });
};

module.exports = { handlePostRequest };
