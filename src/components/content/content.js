import React from "react";
import { useSelector } from 'react-redux';
import "./App.css";
import Error from "../error/error";

const Content = ({
  errorContent,
  activeError,
}) => {
  const {
    palindromeData,
    loadingPalindromeError,
  } = useSelector((state) => state.palindrome);

  return (
    <>
      <div className="content-container">
        <div className="content row">
          <div className="title-content col-12 col-md-2">Results:</div>
          <div className="col-12 col-md-10"></div>
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-8">
            <label
              htmlFor="exampleFormControlInput1"
              className="visually-hidden"
            ></label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="First text"
              disabled
              value={palindromeData?.text || ''}
            />
          </div>
          <div className="col-12 col-md-2"></div>
          <div className="col-12 col-md-2"></div>
          <div className="palindrome-text col-12 col-md-8">
            Palindrome: <span id="palindrome-answer">{
              palindromeData && String(palindromeData?.palindrome)
            }</span>
          </div>
          <div className="col-12 col-md-2"></div>
          {
            loadingPalindromeError || activeError
              ? (
                <Error errorContent={loadingPalindromeError || errorContent} />
              )
              : null
          }
        </div>
      </div>
    </>
  );
};

export default Content;
