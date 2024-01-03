const initialState = {
  todoList: [],
};
export const ADD = "ADD";
export const DEL = "DEL";
export const CLR = "CLR";
export const TGL = "TGL";
export const addTodo = (payload) => ({ type: ADD, payload });
export const clearTodo = () => ({ type: CLR });
export const deleteTodo = (payload) => ({ type: DEL, payload });
export const toggleTodo = (payload) => ({ type: TGL, payload });
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        todoList: [
          ...state.todoList,
          {
            id: new Date().getTime(),
            text: action.payload,
            completed: false,
          },
        ],
      };
    case DEL:
        return { todoList: state.todoList.filter((item) => item.id !== action.payload) };
    case CLR:
        return initialState;
    case TGL:
        return { 
            todoList: state.todoList.map((item) =>
              item.id === action.payload ? { ...item, completed: !item.completed } : item
            ),};

    default:
      return state;
  }
};
