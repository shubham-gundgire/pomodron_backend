const User = require("../model/user");

const getdata = async (req, res) => {
  try {
    const id = req.user.id;
    const userdata = await User.findOne({ _id: id })
      .select("-password")
      .then((data) => {
       
        return data;
      });

    res.status(200).json({ userdata});
  } catch (error) {
    res.status(400).json({
      msg: "unable to reset try later",
      code: "100",
      error,
    });
  }
};

module.exports = { getdata };
