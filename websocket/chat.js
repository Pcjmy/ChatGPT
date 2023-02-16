// chat.js
var chat = document.getElementById("chat");
var input = document.getElementById("input");

// create a WebSocket object
var ws = new WebSocket("ws://localhost:8080");

// handle WebSocket events
ws.onopen = function() {
  console.log("Connected");
};

ws.onclose = function() {
  console.log("Disconnected");
};

ws.onerror = function(error) {
  console.error(error);
};

ws.onmessage = function(event) {
  // show the received message on the chat interface
  showMessage(event.data);
};

// send the input message to the WebSocket server when the user presses enter
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    ws.send(input.value);
    input.value = "";
  }
});

// show a message on the chat interface
function showMessage(message) {
  var div = document.createElement("div");
  div.textContent = message;
  chat.appendChild(div);
}
