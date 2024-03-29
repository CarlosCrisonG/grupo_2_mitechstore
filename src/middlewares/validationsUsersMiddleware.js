const { body } = require('express-validator');
const path = require('path');
const db = require("../database/models");

module.exports = {
	register: [
		body('first_name')
			.notEmpty().withMessage('Debe ingresar un nombre')
			.isLength({ min: 2 }).withMessage('El nombre debe tener un mínimo de dos caracteres'),
		body('last_name')
			.notEmpty().withMessage('Debe ingresar un apellido')
			.isLength({ min: 2 }).withMessage('El apellido debe tener un mínimo de dos caracteres'),
		body('email')
			.notEmpty().withMessage('Debe ingresar un correo electrónico')
			.isEmail().withMessage('Ingrese un correo electrónico válido'),
		body('password')
			.notEmpty().withMessage('Ingrese una contraseña')
			.isLength({ min: 8 }).withMessage('La contraseña debe tener un mínimo de 8 caracteres')
			.custom((value, { req }) => {
				const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{0,}$/;
				if (!regex.test(value)) {
					throw new Error('La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.');
				}
				return true;
			}),
		body('phone')
			.notEmpty().withMessage('Debe ingresar un número de teléfono')
			.isInt().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('userprofile')
			.notEmpty().withMessage('Elija su perfil')
			.isInt({ min: 1, max: 2 }).withMessage('Sólo pueden ingresarse los valores numéricos 1 o 2'),
		body('country')
			.notEmpty().withMessage('Debe seleccionar un pais')
			.custom(async (value, { req }) => {
				let userCountry = await db.Country.findOne({where: {id: value}})
				if (!userCountry) {
					throw new Error('El país seleccionado no está disponible');
				}
				return true;
			}),
		body('region').notEmpty().withMessage('Ingrese la región en la que reside'),
		body('city').notEmpty().withMessage('Ingrese la ciudad en la que reside'),
		body('zip').notEmpty().withMessage('Ingrese el código postal de la ciudad indicada arriba'),
		body('address').notEmpty().withMessage('Ingrese su dirección'),
		body('avatar').custom((value, { req }) => {

			if (req.fileValidationError == true) {
				req.fileValidationError = false
				throw new Error("Los únicos formatos de archivo admitidos son JPG, JPEG, PNG y GIF");
			}
			return true;
		}),
	],
	update: [
		body('first_name')
			.notEmpty().withMessage('Debe ingresar un nombre')
			.isLength({ min: 2 }).withMessage('El nombre debe tener un mínimo de dos caracteres'),
		body('last_name')
			.notEmpty().withMessage('Debe ingresar un apellido')
			.isLength({ min: 2 }).withMessage('El apellido debe tener un mínimo de dos caracteres'),
		body('email')
			.notEmpty().withMessage('Debe ingresar un correo electrónico')
			.isEmail().withMessage('Ingrese un correo electrónico válido'),
		body('password').custom((value, { req }) => {
			if (value != "" && value.length < 8) {
				throw new Error("La contraseña debe tener un mínimo de 8 caracteres");
			}
			const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{0,}$/;
			if (value != "" && !regex.test(value)) {
				throw new Error('La contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.');
			}
			return true;
		}),
		body('phone')
			.notEmpty().withMessage('Debe ingresar un número de teléfono')
			.isInt().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('userprofile')
			.notEmpty().withMessage('Elija su perfil')
			.isInt({ min: 1, max: 2 }).withMessage('Sólo pueden ingresarse los valores numéricos 1 o 2'),
		body('country')
			.notEmpty().withMessage('Debe seleccionar un pais')
			.custom(async (value, { req }) => {
				let userCountry = await db.Country.findOne({where: {id: value}})
				if (!userCountry) {
					throw new Error('El país seleccionado no está disponible');
				}
				return true;
			}),
		body('region').notEmpty().withMessage('Ingrese la región en la que reside'),
		body('city').notEmpty().withMessage('Ingrese la ciudad en la que reside'),
		body('zip').notEmpty().withMessage('Ingrese el código postal de la ciudad indicada arriba'),
		body('address').notEmpty().withMessage('Ingrese su dirección'),
		body('avatar').custom((value, { req }) => {

			if (req.fileValidationError == true) {
				req.fileValidationError = false
				throw new Error("Los únicos formatos de archivo admitidos son JPG, JPEG, PNG y GIF");
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