const routes = require('express').Router();
const multer = require("multer");
const Backup = require("./models/backup");


routes.post('/upload', multer(multerWindows).single('file'), async (req, res) => {
    const { filename: name, size, originalname: ext, destination } = req.file;
    const post = await Backup.create({    
        name,
        size,
        ext,
        destination
    });
    return res.json(post);
});

routes.post('/uploadLinux', multer(multerLinux).single('file'), async (req, res) => {
  const { filename: name, size, originalname: ext, destination } = req.file;
  const post = await Backup.create({
        name,
        size,
        ext,
        destination
    });
    return res.json(post);
});

routes.post('/uploadLinuxInc', multer(multerLinuxInc).single('file'), async (req, res) => {
  const { filename: name, size, originalname: ext, destination } = req.file;
  const post = await Backup.create({
        name,
        size,
        ext,
        destination
    });
    return res.json(post);
});


routes.get('/Backup', async (req, res) => {
  const posts = await Backup.find();
  return res.json(posts);
}),
 

module.exports = routes;

