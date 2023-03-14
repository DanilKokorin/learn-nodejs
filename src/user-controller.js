const User = require('./user-model')

const gerUsers = async (req, res) => {
  let users;

  req.params.id 
    ? users = await User.findByIf(req.params.id)
    : users = await User.find();

  res.send(users);
}

const createUser = async (req, res) => {
  const user = await User.create(req.body);;
  users.push(user);
  res.send(user);
}

module.exports = {
  gerUsers,
  createUser,
}