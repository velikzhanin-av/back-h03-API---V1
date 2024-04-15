import {Request, Response} from "express";
import {deletePost} from "../../repositories/posts/postsRepository";

export const deletePostById = (req: Request, res: Response) => {
    const result = deletePost(req.params.id)
    if (!result) {
        res.sendStatus(404)
    } else {res.sendStatus(204)}
}