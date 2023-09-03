import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";

const config = {
  botName: "HiProcess",
  initialMessages: [createChatBotMessage(`Hello! how can i help you.`)],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
};

export default config;
