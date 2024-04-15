import {Request, Response} from "express"
import {findBlogById} from "../../repositories/blogs/blogsRepository";

export const getBlogById = (req: Request, res: Response) => {
    const blog =  findBlogById(req.params.id)
    if (!blog) {
        res
            .sendStatus(404)
    }
    res
        .status(200)
        .json(blog)
}