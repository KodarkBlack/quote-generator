import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCyH_duSl3zTTMpaaPvpl7byZ0CRG4pIhM",
    authDomain: "miderandomquote.firebaseapp.com",
    projectId: "miderandomquote",
    storageBucket: "miderandomquote.appspot.com",
    messagingSenderId: "691429738075",
    appId: "1:691429738075:web:a11ee915c8b764816ee17e",
    measurementId: "G-B7BQGG62D5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()

let email = document.getElementById("email")
let password = document.getElementById("password")


window.login = function(e){
    e.preventDefault()
  
    const obj = {
      email:email.value,
      password:password.value
    };

    document.querySelector('.loader').style.display = 'flex';
    document.getElementById('signUpForm').style.display = 'none'
    document.getElementById('notamember').style.display = 'none'
  
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success){
      console.log(success.user.uid)

      alert("Logged in successfully")

      // Hide loader after successful login
      document.querySelector('.loader').style.display = 'none';
      setTimeout(() =>{
        window.location.href = "/quote.html"
      })
    })
    .catch(function (error){
      alert("Login error" + error)
      document.querySelector('.loader').style.display = 'none';
    });
    console.log(obj)
}
