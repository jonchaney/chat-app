const Chat = require('./chat');

export default class ChatUI {
  constructor(socket) {
    this.chat = new Chat(socket);
  }
}
