import { RootState } from "../store";
import { ITodo } from "./types";

export const selectNextId = (state: RootState) => {
    const { todos } = state.todo;
    if(todos.length > 0) {
        return todos.reduce((prev, curr) => prev.id > curr.id ? prev : curr).id + 1;
    }
    return 1;
}

export const selectTodos = (state: RootState) => {
    const { todos, filters } = state.todo;
    // return filters.length === 0
    //     ? todos
    //     : todos.filter((todo) => todo.categories.some((category) => filters.indexOf(category)));
    if (filters.length > 0) {
        const arr = todos.filter((todo) => todo.categories.some((category) => filters.indexOf(category)));
        // console.log(arr);
    }
    return todos
}