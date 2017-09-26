export default class Chat {
  constructor(socket) {
    this.socket = socket;
  }

  sendMessage(msg, room) {
    this.socket.emit('message', {text: msg, room});
  }

}
