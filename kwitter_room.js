var firebaseConfig = {
  apiKey: "AIzaSyAgu58BwOKyv0oAf5PyUro8eY4wJ54efMU",
  authDomain: "kwitter-cdfbb.firebaseapp.com",
  databaseURL: "https://kwitter-cdfbb-default-rtdb.firebaseio.com",
  projectId: "kwitter-cdfbb",
  storageBucket: "kwitter-cdfbb.appspot.com",
  messagingSenderId: "715179351068",
  appId: "1:715179351068:web:45b141623dee01b796d3d9",
  measurementId: "G-WYP1TKEKTM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logOut(){
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location ="index.html";

}

username= localStorage.getItem("username");
document.getElementById("username").innerHTML= "welcome " + username;

function Addroom(){
roomname= document.getElementById("room_name").value;
firebase.database().ref("/").child(roomname).update({
purpose: "adding room"});

localStorage.setItem("room_name", roomname);
window.location="kwitter_page.html";
}

//Start code
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  roomname = childKey;
 
 console.log("roomname"+roomname);

 row = "<div class='room_name' id="+roomname+" onclick='redirectToRoomName(this.id)' >#"+ roomname +"</div><hr>";
  document.getElementById("output").innerHTML + = row;
 
  getData();
function redirectToRoomName(Name){
console.log(Name);
localStorage.setItem("roomname",Name);
window.location="kwitter_page.html"
}

 //End code
 });});}
//End code