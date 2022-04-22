const multer = require("multer");
const path = require("path");
const fs = require('fs');
const crypto = require("crypto");


module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'BKP', "LinuxCompleto"),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            
            const { name, ext } = path.parse(file.originalname);
            crypto.randomBytes(1, (err, hash) => {
                if (err) cb(err);
            
                const dir = "BKP/LinuxCompleto/" + `${name}` + "-PENDENTE" + `${hash.toString('hex')}`;
                    fs.mkdirSync(dir)
                    cb(null, path.resolve(`${dir}`));
            })
        },

        filename: (req, file, cb) => {
            crypto.randomBytes(4, (err, hash) => {
            const { name, ext } = path.parse(file.originalname);
            const fileName = name;
            cb(null, fileName);
        })
        }
    }),

    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'application/vnd.rar',
            'application/zip',
            'application/octet-stream'
        ];

            if (allowedMimes.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(new Error("Formato de arquivo não suportado"));
            }
    },

};