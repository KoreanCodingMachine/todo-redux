// 액션 타입 정의
const INPUT = 'todos/INPUT';
const ADD_DATA = 'todos/ADD_DATA';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';

// 액션 생성 함수
export const changeInput = (payload) => ({
  type: INPUT,
  input: payload,
});

let id = 3;
export const addData = (title, text) => ({
  type: ADD_DATA,
  todo: {
    id: id++,
    title,
    text,
    done: false,
  },
});

export const remove = (payload) => ({
  type: REMOVE,
  payload,
});

export const toggle = (payload) => ({
  type: TOGGLE,
  payload,
});

// 초기값
const initialState = {
  todos: [
    {
      id: 1,
      title: '1번',
      text: 'react를 배워',
      done: false,
    },
    {
      id: 2,
      title: '2번',
      text: 'redux를 배워',
      done: true,
    },
  ],
};

//  리듀서
function todos(state = initialState, action) {
  switch (action.type) {
    case INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case ADD_DATA:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    default:
      return state;
  }
}

export default todos;
