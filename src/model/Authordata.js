const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/ProductDB', (err) => {
    if (!err)
        console.log("mongoDB succeed");

});

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    authorId: Number,
    authorName: String,
    authorCode: String,
    authorDesc: String,
    authorDate: String,
    price: Number,
    starRating: Number,
    imageUrl: String
});

// //override toJSON method
// ProductSchema.method("toJSON",()=>{
//     const { __v, _id, ...object } = this.toObject();
//     object.id = _id;
//     return object;
// })

var Authordata = mongoose.model('author', AuthorSchema);

module.exports = Authordata;