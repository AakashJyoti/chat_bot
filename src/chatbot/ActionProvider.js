class ActionProvider {
  widget = {
    widget: "options",
  };
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  getResponse = async (msg) => {
    const res = await fetch(`/api/chat?query=${msg}`);
    const data = await res.json();
    const message = this.createChatBotMessage(data.result);
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
