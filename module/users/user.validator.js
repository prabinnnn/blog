const Joi = require("joi");
const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 1,
    tlds: { allow: ["com"] },
  }),
  phoneno: Joi.string().required(),
});
const validate = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};
module.exports = { validate };
