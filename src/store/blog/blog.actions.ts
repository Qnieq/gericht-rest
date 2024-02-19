import { createAsyncThunk } from "@reduxjs/toolkit";
import { endAt, getDatabase, limitToLast, onValue, orderByChild, query, ref, startAt } from "firebase/database";
import firebaseApp from "../../firebase";

export const getNews = createAsyncThunk(
    'news/getNews',
    async (num: number) => {

        return await new Promise<object[] | object>((resolve) => {
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
        return new Promise<object>((resolve) => {
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
        return new Promise<object>((resolve) => {
            const db = getDatabase(firebaseApp);
            const dbRef = ref(db, `tags/`);
            onValue(dbRef, (snapshot) => {
                const newData = snapshot.val();
                resolve(newData);
            });
        });
    }
)