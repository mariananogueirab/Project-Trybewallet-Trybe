// Esse reducer será responsável por tratar as informações da pessoa usuária
import { TYPE_USER } from '../actions';

const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case TYPE_USER:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
