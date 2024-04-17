import {blogCollection, postCollection} from "../../db/mongoDb";
import {ObjectId} from "mongodb";
import {PostDbType} from "../../db/dbTypes";
import {db} from "../../db/db";
import {Request} from "express";

const mapToOutput = (post: PostDbType) => {
    return {
        id: post._id.toString(),
        title: post.title,
        shortDescription: post.shortDescription,
        content: post.content,
        blogId: post.blogId,
        blogName: post.blogName,
        createdAt: post.createdAt
    }
}

export const findAllPosts = async () => {
    let res = await postCollection.find().toArray()
    return res.map((post: PostDbType) => {
        return mapToOutput(post)
    })
}

export const createPost = async (req: Request) => {
    const newPost =
        {
            title: req.body.title,
            shortDescription: req.body.shortDescription,
            content: req.body.content,
            blogId: req.body.blogId,
            blogName: "string",
            createdAt: new Date().toISOString()
        }
    let result = await postCollection.insertOne(newPost)
    console.log(newPost)
    return mapToOutput(newPost)
}