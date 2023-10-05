import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyFrqnRtJ82kkl8BRf3ln-e_a8alVM7js",
  authDomain: "the-dragon-news-1.firebaseapp.com",
  projectId: "the-dragon-news-1",
  storageBucket: "the-dragon-news-1.appspot.com",
  messagingSenderId: "857375473882",
  appId: "1:857375473882:web:419787c53854b44dac25e3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
