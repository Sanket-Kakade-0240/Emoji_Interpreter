import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "ð": "Grinning Face",
  "ð": "Grinning Face with Big Eyes",
  "ð": "Grinning Face with Smiling Eyes",
  "ð": "Beaming Face with Smiling Eyes",
  "ð": "Grinning Squinting Face",
  "ð": " Grinning Face with Sweat",
  "ðĪĢ": " Rolling on the Floor Laughing",
  "ð": " Face with Tears of Joy",
  "ð": " Slightly Smiling Face",
  "ð": " Upside-Down Face",
  "ð": " Winking Face",
  "ð": " Smiling Face with Smiling Eyes",
  "ð": " Smiling Face with Halo",
  "ðĨ°": " Smiling Face with Hearts",
  "ð": " Smiling Face with Heart-Eyes",
  "ðĪĐ": " Star-Struck",
  "ð": " Face Blowing a Kiss",
  "ð": " Kissing Face",
  "ð": " Kissing Face with Closed Eyes",
  "ð": " Kissing Face with Smiling Eyes",
  "ð": " Face Savoring Food",
  "ð": " Face with Tongue",
  "ð": " Winking Face with Tongue",
  "ðĪŠ": " Zany Face",
  "ð": " Squinting Face with Tongue",
  "ðĪ": " Money-Mouth Face",
  "ðĪ": " Smiling Face with Open Hands",
  "ðĪ­": " Face with Hand Over Mouth"
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
    <>      <div className="App">
      <nav class="navigation">
        <div class="nav-head">
          <h1>Sanket Kakade</h1>
        </div>
        <ul class="list-non-bullet nav-pills">
          <li class="list-item-inline">
            <a class="link" href="https://sk1stwebsite.netlify.app/">
              Home
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link link-active" href="https://sk1stwebsite.netlify.app/projects.html">
              Projects
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://sk1stwebsite.netlify.app/blogs.html">
              Blogs
            </a>
          </li>
        </ul>
      </nav>

        <h1 class="head"> Emoji Interpreter </h1>
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
      </footer></div>
    </>
  );
}
