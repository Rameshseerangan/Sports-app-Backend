import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    sports: {
        type: String,
        required: true
    },
    Feature: {
        type: String,
        required: true
    },
    Ruls: {
        type: String,
        required: true
    },
    physical_helth:{
        type: String,
        required: true
    },
    mental_helth: {
        type: String,
        required: true
    }
});
const Post = mongoose.model('Post', postSchema);
export default Post;