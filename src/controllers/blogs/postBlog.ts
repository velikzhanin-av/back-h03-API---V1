import {createBlog} from "../../repositories/blogs/blogsMongoRepository";
import {Request, Response} from "express";

export const postBlog = (req: Request, res: Response) => {
    let result = createBlog(req)
    console.log(result)
    res
        .status(201)
        .json(result)

}