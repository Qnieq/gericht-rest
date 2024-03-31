import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VITE_DATABASE_API_KEY,
  authDomain: process.env.VITE_DATABASE_AUTH_DOMAIN,
  databaseURL: process.env.VITE_DATABASE_URL,
  projectId: process.env.VITE_DATABASE_PROJECT_ID,
  storageBucket: process.env.VITE_DATABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_DATABASE_MESSAGERING_SENDER_ID,
  appId: process.env.VITE_DATABASE_APP_ID,
  measurementId: process.env.VITE_DATABASE_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);

export default app;