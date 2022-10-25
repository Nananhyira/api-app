// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCCTkHz_P5AToky76K3inpIWF7jW1y7kbo",
	authDomain: "virtual-35f22.firebaseapp.com",
	projectId: "virtual-35f22",
	storageBucket: "virtual-35f22.appspot.com",
	messagingSenderId: "717593842329",
	appId: "1:717593842329:web:1fb38ec8e5265648421e08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);