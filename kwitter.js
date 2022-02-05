function adduser(){
username= document.getElementById("usename");
localStorage.setItem("username", username);

window.location="kwitter_room.html";
}