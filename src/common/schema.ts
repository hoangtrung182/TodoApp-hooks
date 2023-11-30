import Joi from "joi";

export const schemaCategory = Joi.object({
  name: Joi.string().min(1).required(),
});

export const schemaProduct = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(1).required(),
  quantity: Joi.number().min(1).required(),
  category: Joi.string().required(),
});

export const schemaAuth = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});
