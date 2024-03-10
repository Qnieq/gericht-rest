import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserDataLogin } from "../../interfaces/store.interface";
import firebaseApp from "../../firebase";
import { getDatabase, onValue, ref } from "firebase/database";



export const UsersApi = createApi({
    reducerPath: "UsersApi",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["users"],
    endpoints: (builder) => ({
        getUsersByLogin: builder.query<IUserDataLogin, string>({
            async queryFn() {
                try {
                    let users = []
                    new Promise<IUserDataLogin>((resolve) => {
                        const db = getDatabase(firebaseApp);
                        const dbRef =  ref(db, `users`);
                        onValue(dbRef, (snapshot) => {
                            users.push(snapshot.val())
                        });
                    });
                    return { data: users }
                } catch (err) {
                    return { error: err };
                }

            },
            providesTags: ["users"],
        })
    })
})

export const { useGetUsersByLoginQuery } = UsersApi