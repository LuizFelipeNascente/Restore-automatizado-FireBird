const mongoose = require('mongoose');
const moment = require("moment");


const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    ext: String,
    destination: String,
    data: {
        type: String,
        default:moment().format("DD/MM/YYYY - hh:mm:ss")
    },
});

module.exports = mongoose.model("Backup", PostSchema);
