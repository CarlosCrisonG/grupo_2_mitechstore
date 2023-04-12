const { body } = require('express-validator');
const path = require('path');

module.exports = {
	register: [
		body('first_name').notEmpty().withMessage('Debe ingresar un nombre'),
		body('last_name').notEmpty().withMessage('Debe ingresar un apellido'),
		body('email')
			.notEmpty().withMessage('Debe ingresar un correo electrónico')
			.isEmail().withMessage('Debe ingresar un correo electrónico válido'),
		body('password')
			.notEmpty().withMessage('Ingrese una contraseña')
			.isLength({ min: 5 }).withMessage('La contraseña debe tener un mínimo de 5 caracteres'),
		body('phone')
			.notEmpty().withMessage('Debe ingresar un número de teléfono')
			.isNumeric().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('userprofile').notEmpty().withMessage('Elija su perfil'),
		body('country').notEmpty().withMessage('Debe seleccionar un pais'),
		body('region').notEmpty().withMessage('Ingrese la región en la que reside'),
		body('city').notEmpty().withMessage('Ingrese la ciudad en la que reside'),
		body('zip').notEmpty().withMessage('Ingrese el código postal de la ciudad indicada arriba'),
		body('address').notEmpty().withMessage('Ingrese su dirección'),
		body('avatar').custom((value, { req }) => {

			if (req.fileValidationError == true) {
				req.fileValidationError = false
				throw new Error("Los únicos formatos de archivo admitidos son JPG, JPEG y PNG");
			}
			return true;
		}),
	],
	update: [
		body('first_name').notEmpty().withMessage('Debe ingresar un nombre'),
		body('last_name').notEmpty().withMessage('Debe ingresar un apellido'),
		body('email')
			.notEmpty().withMessage('Debe ingresar un correo electrónico')
			.isEmail().withMessage('Debe ingresar un correo electrónico válido'),
		body('password').custom(value => {
			if (value != "" && value.length <= 4) {
				throw new Error("La contraseña debe tener un mínimo de 5 caracteres");
			}

			return true
		}),
		body('phone')
			.notEmpty().withMessage('Debe ingresar un número de teléfono')
			.isNumeric().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('userprofile').notEmpty().withMessage('Elija su perfil'),
		body('country').notEmpty().withMessage('Debe seleccionar un pais'),
		body('region').notEmpty().withMessage('Ingrese la región en la que reside'),
		body('city').notEmpty().withMessage('Ingrese la ciudad en la que reside'),
		body('zip').notEmpty().withMessage('Ingrese el código postal de la ciudad indicada arriba'),
		body('address').notEmpty().withMessage('Ingrese su dirección'),
		body('avatar').custom((value, { req }) => {

			if (req.fileValidationError == true) {
				req.fileValidationError = false
				throw new Error("Los únicos formatos de archivo admitidos son JPG, JPEG y PNG");
			}
			return true;
		}),
	],
	login: [
		body('email')
			.notEmpty().withMessage('Debe ingresar un correo electrónico')
			.isEmail().withMessage('Debe ingresar un correo electrónico válido'),
		body('password')
			.notEmpty().withMessage('Ingrese una contraseña')
	]
}