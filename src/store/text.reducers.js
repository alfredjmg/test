import {
  GET_PALINDROME,
  GET_PALINDROME_SUCCESS,
  GET_PALINDROME_ERROR,
} from './text.types';

const initialState = {
  palindrome: '',
  loadingPalindrome: false,
  loadingPalindromeError: null,
  palindromeData: null,
};

export const palindromeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PALINDROME:
      return {
        ...state,
        palindromeData: null,
        loadingPalindrome: true,
        loadingPalindromeError: null
      }
    case GET_PALINDROME_SUCCESS:
      return {
        ...state,
        palindrome: '',
        palindromeData: action.payload,
        loadingPalindrome: false,
        loadingPalindromeError: null,
      }
    case GET_PALINDROME_ERROR:
      return {
        ...state,
        palindrome: '',
        loadingPalindrome: false,
        loadingPalindromeError: "Error on request"
      }
    default:
      return state
  }
}