import {blogCollection} from "../../db/mongoDb";
import {Request} from "express";

export const findAllBlogs = async () => {
    return await blogCollection.find().toArray()
}

export const createBlog = async (req: Request) => {
    const newBlog = {
        _id: {},
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
        createdAt: "2024-04-16T09:04:27.632Z",
        isMembership: true
    }
    let result = await blogCollection.insertOne(newBlog)
    if (result.acknowledged) {
        console.log(newBlog)
        return newBlog
    } else {return {test: 'test'}}
}