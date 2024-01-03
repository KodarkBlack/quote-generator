
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
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
    measurementId: "G-B7BQGG62D5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
