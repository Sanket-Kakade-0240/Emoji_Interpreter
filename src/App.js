import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": " Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": " Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes",
  "😋": " Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",
  "🤗": " Smiling Face with Open Hands",
  "🤭": " Face with Hand Over Mouth"
};

var emojisData = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Not in our database";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <>
      <nav class="navigation">
        <div class="nav-head">
          <h1>Sanket Kakade</h1>
        </div>
        <ul class="list-non-bullet nav-pills">
          <li class="list-item-inline">
            <a class="link" href="/">
              Home
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link link-active" href="/">
              Projects
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="/">
              Blogs
            </a>
          </li>
        </ul>
      </nav>
      <div className="App">
        <h1> Emoji Interpreter </h1>
        <input onChange={emojiInputHandler} />
        <h2>{meaning}</h2>
        <h3> Emojis in our Database </h3>
        {emojisData.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "1rem",
                padding: "0.5rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {" "}
              {emoji}
            </span>
          );
        })}
      </div>
      <footer class="footer">
        <div class="footer-header">
          <h3>My socials</h3>
        </div>
        <ul class="social-links list-non-bullet">
          <li class="list-item-inline">
            <a class="link" href="https://twitter.com/Sanket24Kakade">
              Twitter
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://www.linkedin.com/in/sanket-kakade">
              LinkedIn
            </a>{" "}
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://github.com/Sanket-Kakade-0240">
              Github
            </a>{" "}
          </li>
        </ul>
      </footer>
    </>
  );
}
