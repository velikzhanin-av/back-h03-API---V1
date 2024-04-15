import {Request, Response} from "express"
import {findPostById} from "../../repositories/posts/postsRepository";

export const getPostById = (req: Request, res: Response) => {
    const post = findPostById(req.params.id)
    if (!post) {
        res
            .sendStatus(404)
    }
    res
        .status(200)
        .json(post)
}