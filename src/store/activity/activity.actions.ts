import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, update } from "firebase/database";
import firebaseApp from "../../firebase";
import { IBlogComment, IBlogLikes } from "../../interfaces/components.interface";

export const postComment = createAsyncThunk(
    'news/postComment',
    async (activity: IBlogComment) => {
        return new Promise(() => {
            const db = getDatabase(firebaseApp);
            update(ref(db, `news_blog/${activity.id - 1}/comments/${activity.user}`), {
                ...activity.username
            })

        });
    }
)
export const postLikes = createAsyncThunk(
    'news/postLikes',
    async (activity: IBlogLikes) => {
        return new Promise(() => {
            const db = getDatabase(firebaseApp);
            update(ref(db, `news_blog/${activity.id - 1}/`), {
                likes: {
                    count: activity.count,
                    likes_who: activity.likes_who
                }
            })

        });
    }
)