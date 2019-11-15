window.onload = () => {
  let content = document.querySelector('.dialog'),
    wrap = document.querySelector('.wrap'),
    buttonSend = document.querySelector('.message-btn'),
    alertFalse = document.querySelector('.alert_fail'),
    checkbox = document.querySelector('.send-block_checkbox'),
    name = document.querySelector('.name');
  checkbox.onclick = () => {
    if (checkbox.checked) {
      name.innerHTML = 'Cat';
    } else {
      name.innerHTML = 'Dog';
    }
  }
  buttonSend.addEventListener('click', function addMessage() {
    let message = document.querySelector('.message'),
      blockMessage = document.createElement('div'),
      avatar = document.createElement('div'),
      messageItem = document.createElement('div'),
      messageText = document.createElement('p');
    if (message.value === '') {
      alertFalse.style = 'top: 10%;';
      setTimeout(function removeAlert() {
        alertFalse.style = 'top: -999px;';
      }, 3000);
      return false;
    }
    messageText.innerHTML = message.value;
    if (checkbox.checked) {
      blockMessage.classList.add('message-block');
      avatar.classList.add('message-block_avatar');
      messageItem.classList.add('message-block_item');
    } else {
      blockMessage.classList.add('message-block', 'message-block__me');
      avatar.classList.add('message-block_avatar', 'message-block_avatar__me');
      messageItem.classList.add('message-block_item', 'message-block_item__me');
    }
    // Добавляем содержимое в .dialog
    content.appendChild(blockMessage);
    blockMessage.appendChild(avatar);
    blockMessage.appendChild(messageItem);
    messageItem.appendChild(messageText);
    wrap.scrollTop = wrap.scrollHeight;
    message.value = '';
  });
}