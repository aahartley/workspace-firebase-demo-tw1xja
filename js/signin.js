// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoJ6-2VetXjIyotWfLsMCw6Vcd8dDKfqc",
  authDomain: "buygroceries-7fcb9.firebaseapp.com",
  databaseURL: "https://buygroceries-7fcb9.firebaseio.com",
  projectId: "buygroceries-7fcb9",
  storageBucket: "buygroceries-7fcb9.appspot.com",
  messagingSenderId: "345609131270",
  appId: "1:345609131270:web:894f01ad228a43c4d0ba87",
  measurementId: "G-BYXJRM5H7J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log("start");

$("#Login").submit(function(e){
  e.preventDefault();

  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson["username"]);
  var email = inputJson["username"];
var pass = inputJson["password"];

//sign in

firebase.auth().signInWithEmailAndPassword(email,pass).then
(success=>{
  console.log("works");
  let user = firebase.auth().currentUser;
  console.log(user.displayName+" "+user.email+" "+user.emailVerified);
}).catch(error=>{
  var errorM = error.message;
  console.log(errorM);
});
});

