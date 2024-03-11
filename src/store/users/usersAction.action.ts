import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, onValue, ref, set } from "firebase/database";
import firebaseApp from "../../firebase";
import { IUserDataLogin, IUserDataReg } from "../../interfaces/store.interface";


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

export const postRegUser = createAsyncThunk(
    'team/postRegUser',
    async (user: IUserDataReg) => {
        console.log(user);
        const db = getDatabase(firebaseApp);
        await set(ref(db, `users/` + user.login), {
            ...user
        })
    }
)