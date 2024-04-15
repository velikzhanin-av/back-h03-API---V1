import {config} from "dotenv"

config()
export const SETTINGS = {
    PORT: process.env.port || 3000,
    PATH: {
        BLOGS: '/blogs',
        TESTING: '/testing',
        POSTS: '/posts'
    },
}
