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

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  //var night = parseInt(inputJson["num"]);
  // var cost = parseInt(inputJson["room"].slice(-3));
  // console.log("The cost for this reservation is " + night * cost);

  // save the data to database 
  firebase
    .firestore()
    .collection("hotelInfo")
    .add(inputJson);


  /* clear the entry */
  $("form")[0].reset();
});
