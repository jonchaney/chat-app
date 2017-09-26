const Chat = require('./chat');

export default class ChatUI {
  constructor(socket) {
    this.chat = new Chat(socket);
    this.form = document.querySelector('form');
    this.msgList = document.querySelector('ul#msg-list');
    this.roomList = document.querySelector('ul#roomList');
    this.input = document.querySelector('input');
    this.room = document.querySelector('#room');
  }

  getInput(){
    return this.input.value;
  }

  sendMsg(room){
    this.chat.sendMessage(this.getInput(), room);
  }

  displayMessage(msg){
    const newMessage = document.createElement('li');
    newMessage.textContent = msg;
    this.msgList.appendChild(newMessage);
  }
}
