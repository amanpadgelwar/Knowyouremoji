import React, { useState } from "react";

import "./styles.css";
var color = "green";
var headingText = "Inside Outtt";
var color2 = "yellowgreen";

const emojisD = {
  "🙂": "Slightly smiling face	",
  "😀": "Smiling face	",
  "😃": "Smiling face with big eyes	",
  "😄": "Smiling face with smiling eyes	",
  "😅": "Smiling face with tears",
  "😆": "Grinning face	",
  "🤣": "Rolling on the floor laughing",
  "😂": "Lauging with tears	",
  "🙃": "Upside down face	",
  "😉": "Winking face	",
  "😊": "Smiling face with smiling eyes",
  "😇": "Smiling face with halo	"
};
export default function App() {
  const [meaningOfEmoji, setmeaning] = useState("");

  function emojiInoutHandler(event) {
    var userInput = event.target.value;
    var meaningOfEmoji = emojisD[userInput];

    if (meaningOfEmoji === undefined) {
      meaningOfEmoji = "we don't have this in our database";
    }
    setmeaning(meaningOfEmoji);
  }

  return (
    <div className="App" style={{ backgroundColor: color2 }}>
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <h2>Emoji Finder!!!!</h2>
      <input id="name" type="text" onChange={emojiInoutHandler} />
      <p> {meaningOfEmoji} </p>
    </div>
  );
}
