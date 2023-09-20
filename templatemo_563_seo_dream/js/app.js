

function user1() {
var user = document.getElementById('username').value
var pass = document.getElementById('password').value
  if (user == "abc" && pass == "123") {
    window.open(" ../index.html ")
    alert('correct username')
  } else {
    alert('incorrect username or password')
  }
}