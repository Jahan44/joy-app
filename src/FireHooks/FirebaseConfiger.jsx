import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./FIreConfig";

const FirebaseConfiger = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return { app, analytics };
};
export default FirebaseConfiger;
