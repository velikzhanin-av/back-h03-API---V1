import {Request, Response} from "express";
import {editPost} from "../../repositories/posts/postsRepository";

export const putPostById = (req: Request, res: Response) => {
    const result = editPost(req.params.id, req.body)
    if (!result) {
        res.sendStatus(404)
    } else {res.sendStatus(204)}
}