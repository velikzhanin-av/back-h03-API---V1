import {deleteBlog} from "../../repositories/blogs/blogsRepository";
import {Request, Response} from "express";

export const deleteBlogById = (req: Request, res: Response) => {
    const result = deleteBlog(req.params.id)
    if (!result) {
        res.sendStatus(404)
    } else {res.sendStatus(204)}
}