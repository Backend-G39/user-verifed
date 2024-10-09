const EmailCode = require('../models/EmailCode')
const { sendEmail } = require('../utils/sendEmail')

async function emailCode(req, res, next) {

  //code
  const code = require('crypto').randomBytes(64).toString('hex')

  //userId
  const { id, email, firstName } = req.result
  // const { email, firstName } = req.body
  const userId = id

  const body = { code, userId }

  const userCode = await EmailCode.create(body)
  if (!userCode) return res.sendStatus(400)

  sendEmail({
    to: email,
    subject: 'test',
    html: `
          <div>
               <h1 style="color:red"> Hola ${firstName}</h1>
               <p> y tu codigo para verificar la cuenta es ${code}</p>
          </div>

    `
  })

  return res.status(201).json('User created');
}

module.exports = emailCode