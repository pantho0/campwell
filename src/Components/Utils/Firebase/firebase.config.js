import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW9RvGWyIcGqyvreA4L2znxs5bM7nDoME",
  authDomain: "campwell-54b03.firebaseapp.com",
  projectId: "campwell-54b03",
  storageBucket: "campwell-54b03.appspot.com",
  messagingSenderId: "818507053578",
  appId: "1:818507053578:web:12c12a5f15546f548abdf3",
  measurementId: "G-3RBG1SWPV5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
