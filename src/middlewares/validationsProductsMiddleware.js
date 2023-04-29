const { body } = require('express-validator');
const path = require('path');

module.exports = {
	create: [
		body('name')
			.notEmpty().withMessage('Debe ingresar el nombre del producto')
			.isLength({min:5}).withMessage('El nombre del producto debe tener un mínimo de 5 caracteres'),
		body('description')
			.notEmpty().withMessage('Debe ingresar una descripción del producto')
			.isLength({min:20}).withMessage('La descripción del producto debe tener un mínimo de 20 caracteres'),
		body('price')
			.notEmpty().withMessage('Debe ingresar el precio del producto')
			.isNumeric().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('discount').isNumeric().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('category').notEmpty().withMessage('Debe seleccionar la categoría del producto'),
		body('highlight').notEmpty().withMessage('Elija si quiere destacar su producto'),
		body('colors').notEmpty().withMessage('Seleccione los colores de su producto'),
		body('model').notEmpty().withMessage('Indique el modelo del producto'),
		body('year')
			.notEmpty().withMessage('Indique el año de fabricación del producto')
			.isNumeric().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('size').notEmpty().withMessage('Ingrese las medidas del producto'),
		body('weight').notEmpty().withMessage('Ingrese el peso del producto'),
		body('features').notEmpty().withMessage('Ingrese al menos una característica del producto'),
		body('avatar').custom((value, { req }) => {

			if (req.fileValidationError == true) {
				req.fileValidationError = false
				throw new Error("Los únicos formatos de archivo admitidos son JPG, JPEG, PNG y GIF");
			}
			return true;
		}),
	],
	update: [
		body('name')
			.notEmpty().withMessage('Debe ingresar el nombre del producto')
			.isLength({min:5}).withMessage('El nombre del producto debe tener un mínimo de 5 caracteres'),
		body('description')
			.notEmpty().withMessage('Debe ingresar una descripción del producto')
			.isLength({min:20}).withMessage('La descripción del producto debe tener un mínimo de 20 caracteres'),
		body('price')
			.notEmpty().withMessage('Debe ingresar el precio del producto')
			.isNumeric().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('discount').isNumeric().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('category').notEmpty().withMessage('Debe seleccionar la categoría del producto'),
		body('highlight').notEmpty().withMessage('Elija si quiere destacar su producto'),
		body('colors').notEmpty().withMessage('Seleccione los colores de su producto'),
		body('model').notEmpty().withMessage('Indique el modelo del producto'),
		body('year')
			.notEmpty().withMessage('Indique el año de fabricación del producto')
			.isNumeric().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('size').notEmpty().withMessage('Ingrese las medidas del producto'),
		body('weight').notEmpty().withMessage('Ingrese el peso del producto'),
		body('features').notEmpty().withMessage('Ingrese al menos una característica del producto'),
		body('avatar').custom((value, { req }) => {

			if (req.fileValidationError == true) {
				req.fileValidationError = false
				throw new Error("Los únicos formatos de archivo admitidos son JPG, JPEG, PNG y GIF");
			}
			return true;
		}),
	]
}