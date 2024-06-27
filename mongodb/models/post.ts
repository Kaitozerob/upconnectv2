// post.ts
import { IUser } from "@/types/user";
import mongoose, { Document, Model, Schema, models } from "mongoose";
import { Comment, IComment, ICommentBase } from "./comment";

export interface IPostBase {
    user: IUser;
    text: string;
    imageUrl?: string;
    comments?: IComment[];
    likes?: string[];
}

export interface IPost extends IPostBase, Document {
    createdAt: Date;
    updatedAt: Date;
}

// Define las interfaces de métodos de documento y estáticos
interface IPostMethods {
    likePost(userId: string): Promise<void>;
    unlikePost(userId: string): Promise<void>;
    commentOnPost(comment: ICommentBase): Promise<void>;
    getAllComments(): Promise<IComment[]>;
    removePost(): Promise<void>;
}

interface IPostStatics {
    getAllPosts(): Promise<IPostDocument[]>;
}

// Fusiona los métodos de documento y estáticos con IPost
export interface IPostDocument extends IPost, IPostMethods { } // instancia singular de un post
interface IPostModel extends IPostStatics, Model<IPostDocument> { }

const PostSchema = new Schema<IPostDocument>(
    {
        user: {
            userId: { type: String, required: true },
            userImage: { type: String, required: true },
            firstName: { type: String, required: true },
            lastName: { type: String },
        },
        text: { type: String, required: true },
        imageUrl: { type: String },
        comments: { type: [Schema.Types.ObjectId], ref: "Comment", default: [] },
        likes: { type: [String] },
    },
    {
        timestamps: true,
    }
);

// Define los métodos de instancia
PostSchema.methods.likePost = async function (userId: string) {
    try {
        await this.updateOne({ $addToSet: { likes: userId } });
    } catch (error) {
        console.log("Error when liking post", error);
    }
};

PostSchema.methods.unlikePost = async function (userId: string) {
    try {
        await this.updateOne({ $pull: { likes: userId } });
    } catch (error) {
        console.log("Error when unliking post", error);
    }
};

PostSchema.methods.removePost = async function () {
    try {
        await this.model("Post").deleteOne({ _id: this._id });
    } catch (error) {
        console.log("error when removing post", error);
    }
};

PostSchema.methods.commentOnPost = async function (commentToAdd: ICommentBase) {
    try {
        const comment = await Comment.create(commentToAdd);
        this.comments.push(comment._id);
        await this.save();
    } catch (error) {
        console.log("error when commenting on post", error);
    }
};

PostSchema.methods.getAllComments = async function () {
    try {
        await this.populate({
            path: "comments",
            options: { sort: { createdAt: -1 } }, // sort comments by newest first
        });
        return this.comments;
    } catch (error) {
        console.log("error when getting all comments", error);
    }
};

// Define el método estático getAllPosts
PostSchema.statics.getAllPosts = async function () {
    try {
        const posts = await this.find()
            .sort({ createdAt: -1 })
            .populate({
                path: "comments",
                options: { sort: { createdAt: -1 } },
            })
            .populate("likes")
            .lean(); // lean() returns a plain JS object instead of a mongoose document

        return posts.map((post: IPostDocument) => ({
            ...post,
            _id: (post._id as mongoose.Types.ObjectId).toString(),
            comments: post.comments?.map((comment: IComment) => ({
                ...comment,
                _id: (comment._id as string).toString(),            })),
        }));
    } catch (error) {
        console.log("error when getting all posts", error);
    }
};

export const Post =
    (models.Post as IPostModel) ||
    mongoose.model<IPostDocument, IPostModel>("Post", PostSchema);
