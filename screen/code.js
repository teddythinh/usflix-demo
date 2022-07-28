function blurPassword() {
  var x = document.getElementById("MyPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

