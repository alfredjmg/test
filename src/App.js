import React, { useState } from "react";
import Header from "./components/header/header";
import Content from "./components/content/content";

function App() {
  const [textValue, setTextValue] = useState("");
  // const [isPalindrome, setIsPalindrome] = useState("");
  // const [revertedText, setReverdedText] = useState("");
  const [errorContent, setErrorContent] = useState("");
  const [activeError, setActiveError] = useState(false);

  return (
    <div className="App">
      <div className="container-fluid">
        <Header
          textValue={textValue}
          setTextValue={setTextValue}
          // setIsPalindrome={setIsPalindrome}
          setErrorContent={setErrorContent}
          // setReverdedText={setReverdedText}
          setActiveError={setActiveError}
        />
        <Content
          activeError={activeError}
          errorContent={errorContent}
        // isPalindrome={isPalindrome}
        // revertedText={revertedText}
        />
      </div>
    </div>
  );
}

export default App;
