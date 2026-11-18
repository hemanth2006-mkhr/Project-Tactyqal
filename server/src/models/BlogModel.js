import mongoose from "mongoose"


export const BlogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    slug : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowercase : true
    },
    content : {
        type : String,
        required : true
    },
    excerpt : {
        type : String,
        required : true,
        maxlength : 300
    },
    coverImage : {
        type : String,
        default : ""
    },
    author : {
        type : String,
        required : true,
        trim : true
    },
    category : {
        type : String,
        required : true
    },
    tags : {
        type : [String],
        default : []
    },
    status : {
        type : String,
        enum : ["draft", "published"],
        default : "draft"
    }
}, {timestamps : true})

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;