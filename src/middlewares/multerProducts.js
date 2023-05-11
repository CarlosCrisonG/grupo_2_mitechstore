const path = require("path");
const multer = require("multer");

//multer configuracion
const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destinationPath = path.join(__dirname, "../public/images/products");
        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        const filename =
            Date.now() + "-" + Math.round(Math.random() * 9999) + "-product-image" + path.extname(file.originalname);
        cb(null, filename);
    },
});

const upload = multer({ 
	storage: diskStorage, 
	fileFilter: (req, file, cb) => {
		let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
		let fileExtension = path.extname(file.originalname);
		let extensionIsOk = acceptedExtensions.includes(fileExtension);
		if (extensionIsOk) {
			cb(null, true);
		} else {
			req.fileValidationError = true;
			cb(null, false);
		}
	}
});

module.exports = upload;