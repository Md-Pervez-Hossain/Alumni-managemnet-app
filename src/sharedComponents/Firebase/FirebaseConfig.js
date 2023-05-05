// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA-1cAMzGAaIpJC6-UVVvC8oVCv2Po6Vig",
//   authDomain: "alumni-management-42856.firebaseapp.com",
//   projectId: "alumni-management-42856",
//   storageBucket: "alumni-management-42856.appspot.com",
//   messagingSenderId: "569802586131",
//   appId: "1:569802586131:web:747131c4aa9be97a1367e6",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;
