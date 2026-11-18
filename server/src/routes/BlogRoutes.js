import express from "express"
import { CreateBlog, GetAllBlogs, GetBlog, UpdateBlog, DeleteBlog } from "../controllers/BlogController.js"

const router = express.Router()

router.post("/", CreateBlog)
router.get("/", GetAllBlogs)
router.get("/:id", GetBlog)
router.put("/:id", UpdateBlog)
router.delete("/:id", DeleteBlog)


export default router;