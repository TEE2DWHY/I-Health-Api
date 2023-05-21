const Fields = require("../models/Fields");
const { StatusCodes } = require("http-status-codes");

const createField = async (req, res) => {
  try {
    const field = await Fields.create(req.body);
    res.status(StatusCodes.CREATED).json(field);
  } catch (err) {
    console.log(err);
  }
};

const getFields = async (req, res) => {
  try {
    const fields = await Fields.findById({ _id: req.params.id });
    res.status(StatusCodes.OK).json({ fields });
  } catch (err) {
    console.log(err);
  }
};

const updateFields = async (req, res) => {
  try {
    const update = await Fields.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!update) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: `ID ${req.params.id} does not exist` });
    }
    res
      .status(StatusCodes.OK)
      .json({ msg: "update is successful", update: update });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createField, updateFields, getFields };
