const { body } = require('express-validator');
const path = require('path');
const db = require("../database/models");

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
			.custom(async (value, { req }) => {
				let productCategory = await db.Category.findOne({where: {id: value}})
				if (!productCategory) {
					throw new Error('La categoria seleccionada no está disponible');
				}
				return true;
			}),
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
			.custom(async (value, { req }) => {
				let colorsInDb = await db.Color.findAll();
				let colorsId = colorsInDb.map(color => color.dataValues.id);
				let colorsAreOk = value.every(colorId => colorsId.includes(Number(colorId)));
				if (colorsAreOk) {
					return true
				} else {
					throw new Error("Los colores seleccionados no están disponibles");
				}	
				}),		  
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