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
            url: 'https://food-recipes-with-images.p.rapidapi.com/',
            params: {q: ''},
            headers: {
              'X-RapidAPI-Key': 'a57569c88dmsh32b65a4137fd5c4p161081jsn384445f25026',
              'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
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