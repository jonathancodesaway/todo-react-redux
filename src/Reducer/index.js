import {ADD, REMOVE} from '../Actions';

const initialState = {
    title: "",
    body: "",
    date: "",
    isDone: false
}

export default (state= initialState, action) => {
    switch (action.type) {
        case ADD:
          return Object.assign({}, state, 
            state.title = action.title,
            state.body = action.body,
            state.date = (Date.now()).toString(),
            isDone= false
            );
    
        case REMOVE:
          return Object.assign({}, state, state.isDone = true);

        default:
          return state;
      }
};