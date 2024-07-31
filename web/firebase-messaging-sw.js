importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: 'AIzaSyCo3iRKMZ9bojW8IVPXF66MmhZ65MvAWw4',
    authDomain: 'fastbite-dbdb2.firebaseapp.com',
    projectId: 'fastbite-dbdb2',
    storageBucket: 'fastbite-dbdb2.appspot.com',
    messagingSenderId: '216822927785',
    databaseURL: 'https://fastbite-dbdb2.firebaseio.com',
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});