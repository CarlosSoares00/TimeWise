const multer = require("multer")
const path = require('path')

const storage = multer.diskStorage({ // Objecto que determina como os arquivos enviados serão armazenados no disco.
  
  distanation: function (req, file, cb) {
    if(file.fieldname === 'audio') {
      cb(null, path.join('uploads', 'music'))
    } else {
      cb(new Erro ('Campo de arquivo nao reconhecido.'))
    }
  }, //Responsável por determinar onde os arquivos serão salvos, com base no nome do campo do arquivo

  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

// Middleware de upload
const upload = multer({ 
  storage: storage, // Configuração do armazenamento de arquivos,
  limits: {fileSize: 1024 * 1024 * 20}// Definindo o Tamanho máximo permitido para cada arquivo enviado (20)
})

/*
configurando um middleware de upload de arquivos que usa o Multer, onde os arquivos serão armazenados
de acordo com a configuração definida em storage,
*/

module.exports = upload