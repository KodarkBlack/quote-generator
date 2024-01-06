import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyH_duSl3zTTMpaaPvpl7byZ0CRG4pIhM",
  authDomain: "miderandomquote.firebaseapp.com",
  projectId: "miderandomquote",
  storageBucket: "miderandomquote.appspot.com",
  messagingSenderId: "691429738075",
  appId: "1:691429738075:web:a11ee915c8b764816ee17e",
  // measurementId: "G-B7BQGG62D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// get the auth instance 
const auth = getAuth(app)
let signBtn = document.getElementById("signUp");


function handleSignUp(event){
  event.preventDefault();


  setTimeout(() =>{
    signBtn.textContent = "Proceeding..."
  }, 1000)

  // the the user input

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // create user with email and password 

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setTimeout(()=>{
      signBtn.innerText = "Signed Up Successfully"
    },1000)
    console.log('User signed up:', user)

    // Clear the form feed whe user is logged in

    email.value = "";
    password.value = "";

    return ('User signed up:', user)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('Error:', errorCode, errorMessage)
  })
}

const signUpForm = document.querySelector('form');
signUpForm.addEventListener('submit',handleSignUp)

