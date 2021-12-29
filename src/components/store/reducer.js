import ACTIONS from './actions';

const initialState = {
  Items: [
    {id: 1, title: 'skati'},
    {id: 2, title: 'toty'},
    {id: 3, title: 'skati'},
    {id: 4, title: 'skati'},
    {id: 5, title: 'skati'},
    {id: 6, title: 'skati'},
    {id: 7, title: 'skati'},
    {id: 8, title: 'skati'},
  ],
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
