import {ADD_MESSAGE, DELETE_MESSAGE, LIKE_MESSAGE, SET_ALL_MESSAGES, UPDATE_MESSAGE} from './actionTypes';

let initialState = {};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_MESSAGES:
      return {
        ...state,
        messages: action.messages

      };
    case ADD_MESSAGE:
      let newMessageItem = {
        id: new Date().valueOf(),
        userId: "1",
        user: 'Andy',
        text: action.message,
        createdAt: new Date().toISOString()
      }
      return {
        ...state,
        messages: [...state.messages, newMessageItem]
      };
    case UPDATE_MESSAGE:
      let idx = state.messages.findIndex(el => el.id === action.id);
      let updatedMessageItem = {...state.messages[idx], text: action.message};
      return {
        ...state,
        messages: [
            ...state.messages.slice(0, idx),
            updatedMessageItem,
            ...state.messages.slice(idx + 1)
        ]
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: [...state.messages.filter(message => message.id !== action.id)]
      };
    case LIKE_MESSAGE:
      let likedMessageIdx = state.messages.findIndex(el => el.id === action.id);
      let likeMessageItem = {...state.messages[likedMessageIdx], isLike: action.isLike};
      return {
        ...state,
        messages: [
          ...state.messages.slice(0, likedMessageIdx),
          likeMessageItem,
          ...state.messages.slice(likedMessageIdx + 1)
        ]
      }
    default:
      return state;
  }
};

export default messageReducer;