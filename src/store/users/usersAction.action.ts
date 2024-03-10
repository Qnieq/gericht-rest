import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, onValue, ref } from "firebase/database";
import firebaseApp from "../../firebase";
import { IUserDataLogin } from "../../interfaces/store.interface";


export const getUserByLogin = createAsyncThunk(
    'team/getUserByLogin',
    async (login: string) => {
        return new Promise<IUserDataLogin>((resolve) => {
            const db = getDatabase(firebaseApp);
            const dbRef = ref(db, `users/${login}`);
            onValue(dbRef, (snapshot) => {
                const newData = snapshot.val();
                resolve(newData);
            });
        });
    }
)