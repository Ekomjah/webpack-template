import "sanitize.css";
import "./styles.css";

function component() {
  const element = document.createElement("div");
  return element;
}

document.body.appendChild(component());
console.log("Hello from src/index.js");
const me = "hello";
// test.js

const unused = 42; // ❌ 'unused' is defined but never used.
console.log("hello"); // ✅ allowed
