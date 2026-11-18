import Blog from "../models/BlogModel.js";
import mongoose from "mongoose";

export const CreateBlog = async (req, res) => {
    try {
        const { 
            title, 
            slug, 
            excerpt, 
            content, 
            coverimage, 
            author, 
            category, 
            tags, 
            status 
        } = req.body;

        const blog = await Blog.create({
            title,
            slug,
            excerpt,
            content,
            coverimage,
            author,
            category,
            tags,
            status
        });

        return res.status(201).json({
            success: true,
            message: "Blog created successfully !!!",
            blog
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }    
}

export const GetAllBlogs = async (req, res) => {
    try {
        const blog = await Blog.find({})
        return res.status(200).json({
            success: true,
            blog
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    } 
}

export const GetBlog = async (req, res) => {
    try {
        const param = req.params.id;
        
        // Check if the param is a valid MongoDB ObjectId or a text slug
        const query = mongoose.Types.ObjectId.isValid(param) 
            ? { _id: param } 
            : { slug: param };

        const blog = await Blog.findOne(query);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }
        return res.status(200).json({
            success: true,
            blog
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

export const UpdateBlog = async (req, res) => {
    try {
        const { 
            title, 
            slug, 
            excerpt, 
            content, 
            coverimage, 
            author, 
            category, 
            tags, 
            status 
        } = req.body;

        const blog = await Blog.findByIdAndUpdate(
            { _id: req.params.id }, 
            {
                title,
                slug,
                excerpt,
                content,
                coverimage,
                author,
                category,
                tags,
                status
            }, 
            { new: true, runValidators: true } // 'new: true' returns the updated doc, runValidators ensures schema rules apply on update
        );

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }
        
        return res.status(200).json({
            success: true,
            blog
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }    
}

export const DeleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete({
            _id: req.params.id
        })

        return res.status(200).json({
            success: true,
            message: "Blog deleted successfully"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}