import {Request, Response} from "express";
import {findAllPosts} from "../../repositories/posts/postsRepository";


export const getAllPosts = (req: Request, res: Response) => {
    const db = findAllPosts()
    res
        .status(200)
        .json(db)
}