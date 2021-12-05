import React, { Fragment, useState, useContext, useEffect } from "react";
import "./App.css";

const Header = (props) => {
  let {
    textValue,
    setTextValue,
    setIsPalindrome,
    setErrorContent,
    setReverdedText,
    setActiveError,
  } = props;

  const onChangeText = (e) => {
    setTextValue({
      ...textValue,
      [e.target.name]: e.target.value,
    });
  };

  const cleanValues = (e) => {
    setIsPalindrome("");
    setReverdedText("");
  };

  const onSubmitText = async (e) => {
    e.preventDefault();

    if (textValue.inputText) {
      setActiveError(false);
      let { inputText } = textValue;
      inputText = inputText.trim();
      if (inputText.length === 0) {
        cleanValues();
        setErrorContent("No text");
        setActiveError(true);
      } else {
        fetch(`http://localhost:4000/iecho/${inputText}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            if (data.ok) {
              setReverdedText(data.text);
              let palindromeValue = data.palindrome ? "True" : "False";
              setIsPalindrome(palindromeValue);
            }
          })
          .catch((error) => {
            cleanValues();
            setErrorContent("Error en request");
            setActiveError(true);
          });
      }
    } else {
      cleanValues();
      setErrorContent("No text");
      setActiveError(true);
    }
  };

  return (
    <>
      <div className="header-container">
        <form className="row input-header" onSubmit={onSubmitText}>
          <div className="col-5">
            <label htmlFor="inputText" className="visually-hidden">
              Insert text
            </label>
            <input
              type="text"
              className="form-control "
              id="inputText"
              placeholder="Insert text"
              name="inputText"
              onChange={(e) => onChangeText(e)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Header;
