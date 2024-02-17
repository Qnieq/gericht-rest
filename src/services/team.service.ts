import { getDatabase, ref, onValue } from "firebase/database";
import firebaseApp from "../firebase";
import axios from "axios";

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
    async fdf() {
        const options = {
            method: 'GET',
            url: import.meta.env.VITE_RAPID_API_URL,
            params: {q: ''},
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
              'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
          } catch (error) {
              console.error(error);
          }
    }
}