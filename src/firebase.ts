import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_DATABASE_API_KEY,
  authDomain: import.meta.env.VITE_DATABASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_DATABASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_DATABASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_DATABASE_MESSAGERING_SENDER_ID,
  appId: import.meta.env.VITE_DATABASE_APP_ID,
  measurementId: import.meta.env.VITE_DATABASE_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);

export default app;