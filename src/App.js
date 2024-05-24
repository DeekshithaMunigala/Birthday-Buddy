import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import "../index.css";

const App = () => {
  return (
    <main>
      <Body />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
