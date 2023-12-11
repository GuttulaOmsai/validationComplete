

function myfunction(){
    var x =document.getElementById("password");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}



function validate() {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
   
    if(username === "" || password === "") {
       alert("Both fields are required. Please provide a username and password.");
       return false;
    }
    else if(username.length < 5) {
       alert("Username must be at least 5 characters long");
       return false;
    }
    else if(password.length < 8) {
       alert("Password must be at least 8 characters long");
       return false;
    }
    else {
       alert("Successfuly Logeg in");
       window.location.replace("index.html");
       return true;
    }
   }






































