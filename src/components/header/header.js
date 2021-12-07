import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PalindromeAction } from "../../store/text.actions";
import "./App.css";

const Header = ({
  textValue,
  setTextValue,
  setErrorContent,
  setActiveError,
}) => {
  const dispatch = useDispatch();
  const { loadingPalindrome } = useSelector((state) => state.palindrome);

  const onChangeText = (e) => {
    setTextValue({
      ...textValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitText = async (e) => {
    e.preventDefault();

    if (textValue.inputText) {
      setActiveError(false);
      let { inputText } = textValue;
      inputText = inputText.trim();
      if (inputText.length === 0) {
        setErrorContent("No text");
        setActiveError(true);
      } else {
        dispatch(PalindromeAction(inputText));
      }
    } else {
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
              disabled={loadingPalindrome}
              onChange={(e) => onChangeText(e)}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary" disabled={loadingPalindrome}>
              {
                loadingPalindrome
                  ? (
                    <div class="spinner-grow spinner-grow-sm" role="status">
                      <span class="visually-hidden"></span>
                    </div>
                  )
                  : 'Send'
              }
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Header;
