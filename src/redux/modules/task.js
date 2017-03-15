import { List, Map } from 'immutable';


// Actions

const ADD = 'task/ADD';
const DONE = 'task/DONE';
const INCREMENT_LAST_INDEX = 'task/INCREMENT_LAST_INDEX';


const initialState = {
  lastIndex: 2,
  tasks: List([
    {
      id: 0,
      catId: 0,
      name: '000',
      description: '123',
      done: false
    },
    {
      id: 1,
      catId: 0,
      name: '111',
      description: '123',
      done: true
    },
    {
      id: 2,
      catId: 0,
      name: '222',
      description: '123',
      done: true
    }
  ])
};


// Reducers

export default function task(state = Map(initialState), action = {}) {

  switch (action.type) {
    case ADD:
      return state.set('tasks', state.tasks.push(action.payload));
    /* {
        ...state,
        tasks: state.tasks.push(action.payload)
      }*/

    case INCREMENT_LAST_INDEX:
      return state.set('lastIndex', ++state.lastIndex);
    /*{
        ...state,
        lastIndex: ++state.lastIndex
      }*/

    case DONE:
      const tasks = state.tasks;
      const {id, done} = action.payload;

      return state.set('tasks', tasks.update(
        tasks.findIndex((item)=>item.get('id') === id),
        (item)=>{item.set('done', done)}
      ));

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

export function incrementLastIndex() {
  return {
    type: INCREMENT_LAST_INDEX
  }
}