const { v4: uuidv4 } = require("uuid");
const User = require("../models/User");

const addUser = async (req, res) => {
  const { user } = req.body;
  const _id = uuidv4();

  try {
    const newUser = new User({
      _id,
      name,
      lastName,
      email,
      password
    });

    await newUser.save();

    return res.status(200).json({
      ok: true,
      user: newUser,
    });
  } catch (error) {
    return res.status(503).json({
      ok: false,
      msg: "Something happened...",
    });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ ok: true, users });
  } catch (error) {
    return res.status(503).json({ ok: false, msg: "Something happened" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const found = await User.deleteOne({ _id: id });

    return res.status(200).json({
      ok: true,
      msg: "Deleted ok",
    });
  } catch (error) {
    res.status(503).json({ ok: false, msg: "Something happened" });
  }
};

/* const updateUser = async (req, res) => {
  const { _id, user } = req.body;

  try {
    await User.findOneAndUpdate({
      _id,
      user
    });
    return res.status(200).json({
      ok: true,
      msg: "Updated ok",
    });
  } catch (error) {
    res.status(503).json({ ok: false, msg: "Something happened" });
  }
}; */

module.exports = { addUser, getUser, deleteUser, updateUser };