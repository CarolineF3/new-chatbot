// All the DOM selectors stored as short variables
const chat = document.getElementById("chat");
const inputWrapper = document.getElementById("input-wrapper");
const nameForm = document.getElementById("name-form");
const inputId = document.getElementById("name-input");
const sendButton = document.getElementById("send-btn");

// Global variables declared here
let questionNumber = 1;
const chatDelay = 800;

// Functions declared here
const botReply = (msg) => {
  showMessage(msg, "bot");
};

const userRepy = (msg) => {
  showMessage(msg, "user");
};

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === "user") {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, "bot");
  // Just to check it out, change 'bot' to 'user' here 👆
};

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000);
