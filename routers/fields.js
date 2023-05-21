const router = require("express").Router();
const {
  createField,
  updateFields,
  getFields,
} = require("../controllers/fields");

router.route("/create").post(createField);
router.route("/:id").put(updateFields).get(getFields);
module.exports = router;
