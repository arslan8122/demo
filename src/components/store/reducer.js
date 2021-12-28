import ACTIONS from './actions';

const initialState = {
  Items: ['wow', 'wow'],
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_DATA:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export default DataReducer;
