export interface ITodo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    categories: string[];
}

export type TodoState = {
    todos: ITodo[];
    todoSS: ITodo[];
    filters: string[];
}

export const sampleTodos: ITodo[] = [
    {
        id: 1,
        title: 'First Todo',
        description: 'This is the first todo that I created by default',
        completed: true,
        categories: ['New']
    },
    {
        id: 3,
        title: 'Second Todo',
        description: 'Another Todo object so that I can sorta test variety',
        completed: false,
        categories: ['New']
    },
    {
        id: 7,
        title: 'Third Todo',
        description: 'Alright I am starting to run out of things to write',
        completed: false,
        categories: ['Important']
    },
    {
        id: 11,
        title: 'Fourth Todo',
        description: 'This Todo should have more than one category',
        completed: true,
        categories: ['Important', 'New']
    }
]