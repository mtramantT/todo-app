import todoSlice from "./todoSlice";

export * from './selectors';

export const { addTodo, deleteTodos, filterByCategory, sortTodos } = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;