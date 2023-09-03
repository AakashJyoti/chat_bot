import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";

import LOGO1 from "./lib/icici_bank logo.png";
import LOGO2 from "./lib/MLAI Digital logo.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bot">
        <img src={LOGO1} alt="icici bank logo" className="icici_logo" />
        <img src={LOGO2} alt="MLAI Digital logo" className="mlai_logo" />

        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default App;
