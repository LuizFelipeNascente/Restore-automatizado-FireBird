require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true});

const app = express();

app.use(cors());
app.use(require("./routes"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.listen(3030);