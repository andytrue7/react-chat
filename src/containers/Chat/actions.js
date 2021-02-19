import { 
  SET_ALL_MESSAGES,
  ADD_MESSAGE,
  UPDATE_MESSAGE,
  DELETE_MESSAGE,
  LIKE_MESSAGE
} from './actionTypes';
import * as messageService from '../../services/messageService';

const setMessagesAction = messages => ({
  type: SET_ALL_MESSAGES,
  messages
});

const addMessageAction = message => ({
  type: ADD_MESSAGE,
  message
});

const updateMessageAction = (id, message) => ({
  type: UPDATE_MESSAGE,
  id,
  message
});

const deleteMessageAction = id => ({
  type: DELETE_MESSAGE,
  id
});

const likeMessageAction = (id, isLike) => ({
  type: LIKE_MESSAGE,
  id,
  isLike
});

export const getMessages = () => async dispatch => {
  const messages = await messageService.getResource();
  dispatch(setMessagesAction(messages));
};

export const addMessage = message => dispatch => {
  dispatch(addMessageAction(message));
};

export const updateMessage = (id, message) => dispatch => {
  dispatch(updateMessageAction(id, message));
}

export const deleteMessage = id => dispatch => {
  dispatch(deleteMessageAction(id));
}

export const likeMessage = (id, isLike) => disatch => {
  disatch(likeMessageAction(id, isLike));
}