import _ from "lodash";
import "./styles.css"
import "./sanitize.css"

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
console.log("Hello from src/index.js");
const me = "hello";
// test.js

const unused = 42; // ❌ 'unused' is defined but never used.
console.log("hello"); // ✅ allowed
