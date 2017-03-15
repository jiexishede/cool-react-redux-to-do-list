import { List, Map } from 'immutable';


// Actions

const ADD = 'task/ADD';
const DONE = 'task/DONE';
const EDIT = 'task/EDIT';
const INCREMENT_LAST_INDEX = 'task/INCREMENT_LAST_INDEX';


const initialState = Map({
  lastIndex: 2,
  tasks: List([
    Map({
      id: 0,
      catId: 0,
      name: '000',
      description: '123',
      done: false,
      edit: false
    }),
    Map({
      id: 1,
      catId: 0,
      name: '111',
      description: '123',
      done: true,
      edit: false
    }),
    Map({
      id: 2,
      catId: 0,
      name: '222',
      description: '123',
      done: true,
      edit: false
    })
  ])
});


// Reducers

export default function task(state = initialState, action = {}) {

  switch (action.type) {
    case ADD:
      return state.update('tasks', state.tasks.push(Map(action.payload)));

    case INCREMENT_LAST_INDEX:
      return state.update('lastIndex', ++state.lastIndex);

    case DONE: {
      const {id, done} = action.payload;

      return state.updateIn([
        'tasks',
        state.get('tasks').findIndex((item) => item.get('id') === id)],
        (item) => item.set('done', done)
      );
    }

    case EDIT: {
      const {id, edit} = action.payload;

      return state.updateIn([
        'tasks',
        state.get('tasks').findIndex((item) => item.get('id') === id)],
        (item) => item.set('edit', edit)
      );
    }

    default:
      return state;
  }

}


// Action Creators

export function addTask(task) {
  return {
    type: ADD,
    payload: task
  }
}

export function changeDodeTask(id, done) {
  return {
    type: DONE,
    payload: {
      id,
      done
    }
  }
}

export function editTask(id, edit) {
  return {
    type: EDIT,
    payload: {
      id,
      edit
    }
  }
}

export function incrementLastIndex() {
  return {
    type: INCREMENT_LAST_INDEX
  }
}