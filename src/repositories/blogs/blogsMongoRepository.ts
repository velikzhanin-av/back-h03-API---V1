import {blogCollection} from "../../db/mongoDb";
import {Request} from "express";
import {BlogDbType} from "../../db/dbTypes";

export const findAllBlogs = async () => {
    return await blogCollection.find().toArray()
}

export const createBlog = async (req: Request) => {
    const newBlog = {
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
        createdAt: new Date().toISOString(),
        isMembership: true
    }
    let result = await blogCollection.insertOne(newBlog)
    return mapToOutput(newBlog)
}

const mapToOutput = (blog: any) => {
    return {
        id: blog._id.toString(),
        name: blog.name,
        description: blog.description,
        websiteUrl: blog.websiteUrl,
        createdAt: blog.createdAt,
        isMembership: blog.isMembership
    }
}