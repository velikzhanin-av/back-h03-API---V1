import {findAllBlogs} from "../../repositories/blogs/blogsMongoRepository";

export const getAllBlogs = (req: any, res: any) => {
    const db = findAllBlogs()
    res
        .status(200)
        .json(db)
}