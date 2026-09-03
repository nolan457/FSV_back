import { body, param , validationResult } from "express-validator";

const validateUser = [
    body("name")
        .trim()
        .notEmpty().withMessage("El nombre es obligatorio")
        .isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres")
        .isString().withMessage("El nombre debe ser una cadena de texto"),
    body("email")
        .trim()
        .notEmpty().withMessage("El correo electrónico es obligatorio")
        .isEmail().withMessage("El correo electrónico no es válido"),
];

const validateId = [
    param("id")
        .notEmpty().withMessage("El ID es obligatorio")
        .isInt({gt: 0}).withMessage("El ID debe ser un número entero positivo"),
];

function checkValidation(rules) {
    return async (req, res, next) => {
        const chains = (Array.isArray(rules) ? rules : [rules]).flat(Infinity);
        for (const chain of chains) {
            await chain.run(req);
        }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array().map(err => ({
                        field: err.path,
                        message: err.msg
                    })),
            });
        }
        next();
    };
}

export { checkValidation, validateUser, validateId };