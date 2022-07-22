import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAntPo0YBdwtxRFM6g3fcLzv3_eTaXhzw0",
  authDomain: "online-e6314.firebaseapp.com",
  projectId: "online-e6314",
  storageBucket: "online-e6314.appspot.com",
  messagingSenderId: "898032872515",
  appId: "1:898032872515:web:9bcfd40abc795c6e35b8f6",
  measurementId: "G-54GLXLJRCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

async function register(form) {
  const { email, password, name } = form;

  await createUserWithEmailAndPassword(auth, email, password);
  await addDoc(collection(db, "users"), {
    email,
    name,
  });
  alert("Signed up Successfully");
}

function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert("Successfully logged in!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
}

// to get all data from firebase
async function getData() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}

export { register, login, getData };
