import {
  GET_PALINDROME,
  GET_PALINDROME_SUCCESS,
  GET_PALINDROME_ERROR,
} from './text.types';

const startPalindrome = () => {
  return {
    type: GET_PALINDROME
  }
}

const palindromeSuccess = (response) => {
  return {
    type: GET_PALINDROME_SUCCESS,
    payload: response,
  }
}

const palindromeError = (error) => {
  return {
    type: GET_PALINDROME_ERROR,
    payload: error,
  }
}

export const PalindromeAction = (text) => async (dispatch) => {
  dispatch(startPalindrome());

  setTimeout(() => {
    fetch(`http://localhost:4000/iecho/${text}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data.ok) {
          dispatch(palindromeSuccess(data));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(palindromeError("Error en request"));
      });
  }, 1500);
}