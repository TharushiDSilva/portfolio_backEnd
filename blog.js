const { blog } = require("./blog.1");
const mongoose=require("./db");
const blog_Schema =new mongoose.Schema({
    title:String,
    content:String,
    date: Date,

});
exports.blog_Schema = blog_Schema;
module.exports=blog;