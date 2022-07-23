import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo, sampleTodos, TodoState } from './types';


const initialState: TodoState = {
    todos: sampleTodos,
    todoSS: sampleTodos,
    filters: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            if(index !== -1) {
                state.todos[index] = action.payload;
                state.todoSS[index] = action.payload;
            } else {
                state.todos.push(action.payload);
                state.todoSS.push(action.payload);
            }
        },
        deleteTodos: (state) => {
            state.todos.length = 0;
            state.todoSS.length = 0;
        },
        filterByCategory: (state, action: PayloadAction<string>) => {
            const { filters } = state;

            const fitlerIndex = filters.findIndex((filter) => filter === action.payload); // -1 if empty, -1 if not found
            if (fitlerIndex === -1) {
                filters.push(action.payload)
            } else {
                filters.splice(fitlerIndex, 1);
            }
            
            state.todos = filters.length === 0 
                ? state.todoSS
                : state.todoSS.filter((todo) => filters.some((filter) => todo.categories.includes(filter)));
        },
        sortTodos: (state) => {
            state.todos.sort((a, b) => {
                if (a.completed && b.completed) return 0;
                if (a.completed) return -1;
                if (b.completed) return 1;
                return 0;
            });
        }
    }
})


export default todoSlice;