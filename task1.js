function submit() {
  let username = document.getElementById("username").value;
  let password = Number(document.getElementById("password").value);

  if (username === "admin") {
    if (password === 123) {
      alert("Username and password is Successful");
    }else{
        alert("password is wrong")
    }
  }else if (password === 123) {
    alert("Username is wrong");
  }else{
    alert("Username and password is wrong")
  }
}

const isShow = () => {
    let password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    }else{
        password.type = "password";
    }
}