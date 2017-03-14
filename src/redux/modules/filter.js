// Actions

const CHANGE = 'filter/CHANGE';


const initialState = {
  filterText: ''
};


// Reducers

export default function filter(state = initialState, action = {}) {

  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        filterText: action.payload
      }

    default:
      return state;
  }

}


// Action Creators

export function addFilterText(text='') {
  return {
    type: CHANGE,
    payload: text
  }
}