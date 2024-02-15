import { getDatabase, ref, onValue } from "firebase/database";
import firebaseApp from "../firebase";

export const TeamService = {
    getAllTeams() {
        return new Promise((resolve, reject) => {
            const db = getDatabase(firebaseApp);
            const dbRef = ref(db, "chefs/");
            onValue(dbRef, (snapshot) => {
                const newData = snapshot.val();
                resolve(newData);
            });
        });
    },
    getChefsById(id: string) {
        return new Promise((resolve, reject) => {
            const db = getDatabase(firebaseApp);
            const dbRef = ref(db, `chefs/${id}`);
            onValue(dbRef, (snapshot) => {
                const newData = snapshot.val();
                resolve(newData);
            });
        });
    },

}