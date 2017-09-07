var Rebase = require('re-base');
var firebase = require('firebase');
var app = firebase.initializeApp({
  apiKey: "AIzaSyAA3yyrrYQQzFjKlB1lW1omJCwEmaxLNuk",
  authDomain: "reactip0.firebaseapp.com",
  databaseURL: "https://reactip0.firebaseio.com",
  projectId: "reactip0",
  storageBucket: "reactip0.appspot.com",
  messagingSenderId: "746836039406"
});
var base = Rebase.createClass(app.database());
export { base };
