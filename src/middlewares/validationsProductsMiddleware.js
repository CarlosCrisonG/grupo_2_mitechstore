const { body } = require('express-validator');
const path = require('path');

module.exports = {
	createAndUpdate: [
		body('name')
			.notEmpty().withMessage('Debe ingresar el nombre del producto')
			.isLength({ min: 5 }).withMessage('El nombre del producto debe tener un mínimo de 5 caracteres'),
		body('description')
			.notEmpty().withMessage('Debe ingresar una descripción del producto')
			.isLength({ min: 20 }).withMessage('La descripción del producto debe tener un mínimo de 20 caracteres'),
		body('price')
			.notEmpty().withMessage('Debe ingresar el precio del producto')
			.isNumeric().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('discount').optional({checkFalsy: true}).isNumeric().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('category')
			.notEmpty().withMessage('Debe seleccionar la categoría del producto')
			.isInt({ min: 1, max: 5 }).withMessage('Sólo pueden ingresarse valores numéricos entre 1 y 5'),
		body('highlight')
			.notEmpty().withMessage('Elija si quiere destacar su producto')
			.custom((value, {req}) => {
				if (value != "true" && value != "false") {
					throw new Error("Sólo pueden enviarse los valores 'true' o 'false'");
				}
				return true;
			}),
		body('colors')
			.notEmpty().withMessage('Seleccione los colores de su producto')
			.isInt({ min: 1, max: 10 }).withMessage('Sólo pueden ingresarse valores numéricos entre 1 y 10'),
		body('model').notEmpty().withMessage('Indique el modelo del producto'),
		body('year')
			.notEmpty().withMessage('Indique el año de fabricación del producto')
			.isInt().withMessage('Sólo pueden ingresarse valores numéricos'),
		body('size').notEmpty().withMessage('Ingrese las medidas del producto'),
		body('weight').notEmpty().withMessage('Ingrese el peso del producto'),
		body('features').notEmpty().withMessage('Ingrese al menos una característica del producto'),
		body('images').custom((value, { req }) => {

			if (req.productImagesError == true) {
				req.productImagesError = false
				throw new Error("Los únicos formatos de archivo admitidos son JPG, JPEG, PNG y GIF");
			}
			return true;
		}),
	]
}