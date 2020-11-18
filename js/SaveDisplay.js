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
var ans =0;
var ans2 =0;
var ans3 =0;
var ans4 =0;
var ans5 =0;

firebase
  .firestore()
  .collection("surveys")
  .onSnapshot(function(querySnapshot) {
   // console.log(querySnapshot);
    console.log(querySnapshot.size);
    ans=0;
    ans2=0;
    ans3=0;
    ans4=0;
    ans5=0;

    querySnapshot.forEach(doc =>{
        console.log(doc.data());
        console.log("TEST:"+doc.get("choice"));
        console.log("TEST:"+doc.get("comm"));
        if(doc.get("choice")=="A"){
          ans++;
        $("#ans1").html(ans);
        }
        if(doc.get("choice")=="B"){
          ans2++;
        $("#ans2").html(ans2);
        }
        if(doc.get("choice")=="C"){
          ans3++;
        $("#ans3").html(ans3);
        }
          if(doc.get("choice")=="D"){
            ans4++
        $("#ans4").html(ans4);
          }
          if(doc.get("choice")=="E"){
            ans5++;
        $("#ans5").html(ans5);
          }
    });
  });
