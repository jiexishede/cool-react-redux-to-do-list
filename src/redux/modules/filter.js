// Actions

const CHANGE = 'filter/CHANGE';
const CHANGE_SHOW_DONE = 'filter/CHANGE_SHOW_DONE';


const initialState = {
  filterText: '',
  showDone: true
};


// Reducers

export default function filter(state = initialState, action = {}) {

  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        filterText: action.payload
      }

    case CHANGE_SHOW_DONE:
      return {
        ...state,
        showDone: !!action.payload
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

export function changeShowDone(bool) {
  return {
    type: CHANGE_SHOW_DONE,
    payload: bool
  }
}