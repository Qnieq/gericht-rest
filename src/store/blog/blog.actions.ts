import { createAsyncThunk } from "@reduxjs/toolkit";
import { endAt, equalTo, getDatabase, limitToLast, onValue, orderByChild, query, ref, startAt } from "firebase/database";
import firebaseApp from "../../firebase";
import { IBlogData } from "../../interfaces/store.interface";

export const getNews = createAsyncThunk(
    'news/getNews',
    async (num: number) => {

        return await new Promise<IBlogData[] | IBlogData>((resolve) => {
            const db = getDatabase(firebaseApp);
            const dbRef = query(ref(db, "news_blog"), orderByChild("id"), startAt(num), endAt(num + 3));
            onValue(dbRef, (snapshot) => {
                const newData = snapshot.val();
                resolve(newData);
            });
        });
    }
)
export const getLastNews = createAsyncThunk(
    'news/getLastNews',
    async () => {
        return new Promise<IBlogData>((resolve) => {
            const db = getDatabase(firebaseApp);
            const dbRef = query(ref(db, `news_blog/`), limitToLast(1));
            onValue(dbRef, (snapshot) => {
                const newData = snapshot.val();
                resolve(newData);
            });
        });
    }
)
export const getNewsTags = createAsyncThunk(
    'news/getNewsTags',
    async () => {
        return new Promise<string[]>((resolve) => {
            const db = getDatabase(firebaseApp);
            const dbRef = ref(db, `tags/`);
            onValue(dbRef, (snapshot) => {
                const newData = snapshot.val();
                resolve(newData);
            });
        });
    }
)
export const getNewsBySearch = createAsyncThunk(
    'news/getNewsBySearch',
    async () => {
        return new Promise<IBlogData[]>((resolve) => {
            const db = getDatabase(firebaseApp);
            const dbRef = query(ref(db, "news_blog"));
            onValue(dbRef, (snapshot) => {
                const newData = snapshot.val();
                resolve(newData);
            });
        });
    }
)
export const getNewsById = createAsyncThunk(
    'news/getNewsById',
    async (title?: string) => {
        return new Promise<IBlogData[]>((resolve) => {
            const db = getDatabase(firebaseApp);
            let dbRef;
            if (title) {
                dbRef = query(ref(db, "news_blog"), orderByChild("Title"), equalTo(title));
            } else {
                dbRef = query(ref(db, "news_blog"));
            }
            onValue(dbRef, (snapshot) => {
                const newData = snapshot.val();
                resolve(newData);
            });
        });
    }
)