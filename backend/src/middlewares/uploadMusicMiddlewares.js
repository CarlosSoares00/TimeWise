const multer = require("multer")

const storage = multer.diskStorage({ // Objecto que determina como os arquivos enviados serão armazenados no disco.
  
  destination: function (req, file, cb) {
    cb(null, 'uploads/music/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
})

const upload = multer({ storage: storage })

module.exports = upload