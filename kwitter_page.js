const firebaseConfig = {
      apiKey: "AIzaSyCtP4MeP35aFd7FeEzgD5-BcBhkiYc6KfE",
      authDomain: "kwitter-3be02.firebaseapp.com",
      databaseURL: "https://kwitter-3be02-default-rtdb.firebaseio.com",
      projectId: "kwitter-3be02",
      storageBucket: "kwitter-3be02.appspot.com",
      messagingSenderId: "581607159224",
      appId: "1:581607159224:web:137ca4d1229d1e893c4b4d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         function send()
         {
               msg = document.getElementById("msg").value;
               firebase.database().ref("room_name").push({
                    name:user_name,
                    message:msg
                    like:0 
               });
               document.getElementById("msg").value = ""

         }



      } });  }); }
getData();
