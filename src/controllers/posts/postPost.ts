import {createPost} from "../../repositories/posts/postsRepository";
import {Request, Response} from "express";

export const postPost = (req: Request, res: Response) => {
    const newPost = createPost(req.body)
    res
        .status(201)
        .json(newPost)
}