const path = require("path");
const multer = require("multer");

//multer configuracion
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destinationPath = path.join(__dirname, "../public/images/products");
        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        const filename =
            Date.now() + "-product-image" + path.extname(file.originalname);
        cb(null, filename);
    },
});

const upload = multer({ storage });

module.exports = upload;