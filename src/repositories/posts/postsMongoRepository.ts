import {postCollection} from "../../db/mongoDb";
import {ObjectId} from "mongodb";
import {PostDbType} from "../../db/dbTypes";

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