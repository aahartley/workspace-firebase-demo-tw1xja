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


// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();
  //get the value of form
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  
  // save the data to database 
  firebase
    .firestore()
    .collection("surveys")
    .add(inputJson);

});

// update the result in table
