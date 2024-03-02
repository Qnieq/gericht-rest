import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, onValue, ref } from "firebase/database";
import firebaseApp from "../../firebase";
import { IChefs } from "../../interfaces/store.interface";



export const getAllTeam = createAsyncThunk(
    'team/getAllTeam',
    async () => {
        return new Promise<IChefs>((resolve) => {
            const db = getDatabase(firebaseApp);
            const dbRef = ref(db, "chefs/");
            onValue(dbRef, (snapshot) => {
                const newData = snapshot.val();
                resolve(newData);
            });
        });
    }
)
export const getChefsById = createAsyncThunk(
    'team/getChefsById',
    async (id?: string) => {
        return new Promise<IChefs>((resolve) => {
            const db = getDatabase(firebaseApp);
            const dbRef = ref(db, `chefs/${id}`);
            onValue(dbRef, (snapshot) => {
                const newData = snapshot.val();
                resolve(newData);
            });
        });
    }
)