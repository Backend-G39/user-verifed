async function emailCode(req, res, next) {

  //code
  const code = require('crypto').randomBytes(64).toString('hex')

  //userId
  const result = req.result
  const userId = result.id


  return res.status(201).json(result);
}

module.exports = emailCode