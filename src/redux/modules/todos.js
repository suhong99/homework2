// src/redux/modules/counter.js

// Action Value
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const DELETE_TODO = "todos/DELETE_TODO ";

// Action Creator
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo, //자바es6에서 키랑 벨류가 같으면  :없이 가능 payload:payload
  };
};
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};
// export const subtractNumber = (payload) => {
//   return {
//     type: SUBTRACT_NUMBER,
//     payload, //자바es6에서 키랑 벨류가 같으면  :없이 가능 payload:payload
//   };
// };
// Initial State
const initialState = {
  todolist: [
    {
      id: 1, // id는 모두 고유값이어야 합니다.
      title: "리액트 강의보기",
      content: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: 2, // id는 모두 고유값이어야 합니다.
      title: "점심 먹기",
      content: "점심 뭐먹지..?",
      isDone: false,
    },
  ],
  num: 6,
};

// Reducer
const todos = (state = initialState, action) => {
  // console.log(state, +"state");

  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todolist: [...state.todolist, action.todo],
        num: state.num + 1,
      };
    }
    case TOGGLE_TODO:
      const newTodo = state.todolist.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return { ...todo };
        }
      });
      console.log(newTodo);

      return {
        ...state,
        todolist: newTodo,
      };
    case DELETE_TODO: {
      const newTodo = state.todolist.filter((todo) => todo.id !== action.id);
      console.log(state);
      // // console.log(...state);
      // console.log("state고 아래가 newTodo");
      // console.log(newTodo);
      return {
        ...state,
        todolist: newTodo,
      };
    }

    default:
      return state;
  }
};
// export default reducer
export default todos;
