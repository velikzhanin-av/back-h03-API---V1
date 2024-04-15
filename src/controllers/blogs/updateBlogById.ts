import {Request, Response} from "express";
import {editBlog} from "../../repositories/blogs/blogsRepository";

export const updateBlogById = (req: Request, res: Response) => {
    const result = editBlog(req.params.id, req.body)
    if (!result) {
        res.sendStatus(404)
    } else {res.sendStatus(204)}
}