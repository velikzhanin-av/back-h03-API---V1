import {createBlog} from "../../repositories/blogs/blogsRepository";
import {NextFunction, Request, Response} from "express";

export const postBlog = (req: Request, res: Response) => {
    const newBlog = {
        "id": Math.random().toString(36).substring(2) + Math.floor(Math.random() * 100000),
        "name": req.body.name,
        "description": req.body.description,
        "websiteUrl": req.body.websiteUrl
    }
    createBlog(newBlog)
    res
        .status(201)
        .json(newBlog)

}