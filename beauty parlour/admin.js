
   function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == 'omsai' && password == '12345') {
      alert('Login successful');
      window.location.replace("index.html");
      return true;
    }
   else if(username == 'gopi' && password == '12345') {
      alert('Login successful');
      window.location.replace("index.html");
      return true;
    }
    else if(username == 'vamsi' && password == '12345') {
      alert('Login successful');
      window.location.replace("index.html");
      return true;
    }

    else if(username == 'hari' && password == '12345') {
      alert('Login successful');
      window.location.replace("index.html");
      return true;
    }

     else {
      alert('Login failed. Please check your username and password.');
     
      return false;
    }

  }





