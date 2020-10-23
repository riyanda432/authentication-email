const Joi = require('joi');

module.exports = {

  validateBody: (schema) => {

     (req, res, next) => {
        schema = Joi.object({ 
            email: Joi.string() .min(6) .required() .email(),
            password: Joi.string() .min(6) .required() });

      const result = schema.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      }

      if (!req.value) { req.value = {}; }
      req.value['body'] = result.value;
      next();
    }
  },

  schemas: {
    authSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    })
  }
}