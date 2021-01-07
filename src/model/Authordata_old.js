const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProductDB', (err) => {
    if (!err)
        console.log("mongoDB succeed");

});

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    author_Id: Number,
    author_Name: String,
    author_Code: String,
    author_Desc: String,
    releaseDate: String,
    author_Price: Number,
    author_Rating: Number,
    author_imageUrl: String,
    author_image: { data: Buffer, contentType: String }
});

var Authordata = mongoose.model('author', AuthorSchema);

module.exports = Authordata;