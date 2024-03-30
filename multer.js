let multer = require('multer')

const uploadFiles = () => {
  const storage = multer.diskStorage({});
  const multerUpload = multer({ storage });
  return multerUpload;

}

module.exports = uploadFiles;