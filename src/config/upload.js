const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'), // dirname variável global que informa diretório do arquivo atual
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext); // retorna o nome de uma imagem sem a extensão

      cb(null, `${name}-${Date.now()}${ext}`);
    } // cb: função que é chamada assim que o nome do arquivo estiver pronto
  }) // armazenar os arquivos que recebermos
};
