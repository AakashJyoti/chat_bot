class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    if (message.length) {
      this.actionProvider.getResponse(message);
    }
  }
}

export default MessageParser;
