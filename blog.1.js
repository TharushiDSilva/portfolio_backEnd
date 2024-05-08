const mongoose = require("./db");
const { blog_Schema } = require("./blog");

const blog = mongoose.model("blog", blog_Schema);
exports.blog = blog;
