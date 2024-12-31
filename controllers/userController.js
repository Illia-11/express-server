const User = require('../models/User');

module.exports.getUsers = async (request, response) => {
  const users = await User.findAll();
  response.status(200).send(users);
};

module.exports.getUser = async (req, res) => {
  const { params: { userId }} = req;

  const user = await User.findOne(+userId);
  res.send(user);
}

module.exports.createUser = async (req, res, next) => {
  const { user, file } = req;

  /*
    {
      "fieldname": "userPic",
      "originalname": "photo_2024-12-06 16.03.54.jpeg",
      "encoding": "7bit",
      "mimetype": "image/jpeg",
      "destination": "uploads/",
      "filename": "f973a030aa1bb8a3ac100d45e70eaeef",
      "path": "uploads/f973a030aa1bb8a3ac100d45e70eaeef",
      "size": 56304
    }
  */

  const newUser = await User.create({...user, avatarName: file.filename});

  const { password, ...preparedUser } = newUser;

  res.status(201).send({ preparedUser });
}

module.exports.deleteUser = async (req, res) => {
  const {params: {userId}} = req;

  try {
    const deletedUser = await User.remove(+userId);
    res.send(deletedUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

module.exports.updateUser = async (req, res) => {
  const { user, params: {userId}} = req;

  try {
    const updatedUser = await User.updateOne(+userId, user);
    res.send(updatedUser);
  } catch (error) {
    res.status(404).send(error.message);
  }
}