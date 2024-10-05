const User = require("../models/User")

const getAllServices = async () => {
  return User.findAll()
}

const createServices = async (user) => {
  return User.create(user)
}

const getOneServices = async () => {
  return
}

const updateServices = async () => {
  return
}

const deleteServices = async () => {
  return
}


module.exports = {
  getAllServices,
  createServices,
  getOneServices,
  updateServices,
  deleteServices

}