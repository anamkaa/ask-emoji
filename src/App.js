import React, { useState } from "react";

import "./styles.css";

var emojiDictionary = {
  "💯": "Hundred Points",
  "💢": "Anger Symbol",
  "💬": "Speech Balloon",
  "👁️‍🗨️": "Eye in Speech Bubble",
  "🗨️": "Left Speech Bubble",
  "🗯️": "Right Anger Bubble",
  "💭": "Thought Balloon",
  "💮 ": "White Flower",
  "♨️": "Hot Springs",
  "💈": "Barber Pole",
  "🛑": "Stop Sign",
  "😋 ": "Face Savoring Food",
  "😛 ": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪 ": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔 ": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳 ": "Partying Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [inputChange, setInputChange] = useState("");

  function inputChangeHandler(event) {
    var inputEmoji = event.target.value;
    var inputChange = emojiDictionary[inputEmoji];

    if (inputChange === undefined) {
      inputChange = "We don't have this emoji.";
    }
    setInputChange(inputChange);
  }

  function onClickHandler(emoji) {
    var inputChange = emojiDictionary[emoji];
    setInputChange(inputChange);
  }

  return (
    <div className="App">
      <h1>Know Your Emoji</h1>
      <input onChange={inputChangeHandler} style={{ padding: "0.5rem" }} />

      <div
        style={{
          padding: "0.5rem",
          fontSize: "1.5rem",
          margin: "0.5rem",
          fontWeight: "4rem"
        }}
      >
        {" "}
        {inputChange}{" "}
      </div>
      <h3> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            className="container-center"
            onClick={() => onClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "1rem",
              margin: "1rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
