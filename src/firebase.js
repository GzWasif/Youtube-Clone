import { initializeApp } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-LutKAv-goBoIduU6VlQP52VCwRS4Anc",
  authDomain: "clone-2f324.firebaseapp.com",
  projectId: "clone-2f324",
  storageBucket: "clone-2f324.appspot.com",
  messagingSenderId: "218560174637",
  appId: "1:218560174637:web:8741129322449ca8d3f6a4",
};

const app = initializeApp(firebaseConfig);
console.log(app);
