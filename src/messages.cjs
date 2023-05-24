document.addEventListener("DOMContentLoaded", function() {
    var sendButton = document.querySelector("#messagebox button");
    sendButton.addEventListener("click", sendMessage);
  });
  
  function sendMessage() {
    var messageBox = document.querySelector("#messagebox input");
    var messageContent = messageBox.value;
  
    if (messageContent.trim() !== "") {
      var messageList = document.querySelector("#messagelist ul");
  
      var listItem = document.createElement("li");
      var userAvatar = document.createElement("img");
      var messageContentDiv = document.createElement("div");
      var messageTopDiv = document.createElement("div");
      var senderSpan = document.createElement("span");
      var timestampSpan = document.createElement("span");
      var messageBottomDiv = document.createElement("div");
      var messageParagraph = document.createElement("p");
  
      userAvatar.src = "../avatar.jpg";
      userAvatar.alt = "User Avatar";
  
      senderSpan.className = "username";
      senderSpan.textContent = "Sender";
  
      var currentTime = new Date();
      var timestamp = currentTime.getHours() + ":" + currentTime.getMinutes();
      timestampSpan.className = "timestamp";
      timestampSpan.textContent = ` ${timestamp}`
  
      messageParagraph.textContent = messageContent;
  
      messageTopDiv.appendChild(senderSpan);
      messageTopDiv.appendChild(timestampSpan);
      messageBottomDiv.appendChild(messageParagraph);
      messageContentDiv.appendChild(messageTopDiv);
      messageContentDiv.appendChild(messageBottomDiv);
      listItem.appendChild(userAvatar);
      listItem.appendChild(messageContentDiv);
      messageList.appendChild(listItem);

      messageTopDiv.classList = 'messagetop';
      messageBottomDiv.className = 'messagebottom';
      messageContentDiv.className = 'messagecontent';
  
      messageBox.value = "";
    }
  }
  