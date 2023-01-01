// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBiwLGX9ixQp73KIRAscqYZ53SWw2in9kk",
    authDomain: "lets-chat-ddb89.firebaseapp.com",
    databaseURL: "https://lets-chat-ddb89-default-rtdb.firebaseio.com",
    projectId: "lets-chat-ddb89",
    storageBucket: "lets-chat-ddb89.appspot.com",
    messagingSenderId: "492865007160",
    appId: "1:492865007160:web:0d2b3b06f059603b17c0cd",
    measurementId: "G-EWXEFEXPE7"
  };
  
  

firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



