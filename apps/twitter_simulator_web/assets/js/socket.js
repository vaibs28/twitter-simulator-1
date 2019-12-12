// NOTE: The contents of this file will only be executed if
// you uncomment its entry in "web/static/js/app.js".

// To use Phoenix channels, the first step is to import Socket
// and connect at the socket path in "lib/my_app/endpoint.ex":
import { Socket } from "phoenix"

let socket = new Socket("/socket", { params: { token: window.userToken } })

// When you connect, you'll often need to authenticate the client.
// For example, imagine you have an authentication plug, `MyAuth`,
// which authenticates the session and assigns a `:current_user`.
// If the current user exists you can assign the user's token in
// the connection for use in the layout.
//
// In your "web/router.ex":
//
//     pipeline :browser do
//       ...
//       plug MyAuth
//       plug :put_user_token
//     end
//
//     defp put_user_token(conn, _) do
//       if current_user = conn.assigns[:current_user] do
//         token = Phoenix.Token.sign(conn, "user socket", current_user.id)
//         assign(conn, :user_token, token)
//       else
//         conn
//       end
//     end
//
// Now you need to pass this token to JavaScript. You can do so
// inside a script tag in "web/templates/layout/app.html.eex":
//
//     <script>window.userToken = "<%= assigns[:user_token] %>";</script>
//
// You will need to verify the user token in the "connect/2" function
// in "web/channels/user_socket.ex":
//
//     def connect(%{"token" => token}, socket) do
//       # max_age: 1209600 is equivalent to two weeks in seconds
//       case Phoenix.Token.verify(socket, "user socket", token, max_age: 1209600) do
//         {:ok, user_id} ->
//           {:ok, assign(socket, :user, user_id)}
//         {:error, reason} ->
//           :error
//       end
//     end
//
// Finally, pass the token on connect as below. Or remove it
// from connect if you don't care about authentication.

socket.connect()

// Now that you are connected, you can join channels with a topic:


export default socket


var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener('click', function test(params) {
  login();
});

var logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener('click', function test(params) {
  logout();
});

function showDashboard() {
  var dashboard = document.getElementById("dashboardContainer");
  var login = document.getElementById("loginContainer");
  login.style.display = "none";
  dashboard.style.display = "block";
}

function showLogin() {
  var dashboard = document.getElementById("dashboardContainer");
  dashboard.style.display = "none";
  var login = document.getElementById("loginContainer");
  login.style.display = "block";
  document.getElementById("username").value = "";
  document.getElementById("pwd").value = "";
}

function login() {
  var value = validateLogin();
  if (value == "invalid")
    alert("Username and Password cannot be empty");
  else {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value
    channel.push("login_user", { username, password });
  }
}
function logout() {
  showLogin();
}

function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("pwd").value;
  if (username == undefined || password == undefined || username == "" || password == "") {
    return "invalid";
  }
}

