
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "aimg-to-text.firebaseapp.com",
	projectId: "aimg-to-text",
	storageBucket: "aimg-to-text.appspot.com",
	messagingSenderId: "378643863813",
	appId: "1:378643863813:web:38f655b2be01ceaeb27f6c",
	measurementId: "G-5GYBZB9Z5L",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
