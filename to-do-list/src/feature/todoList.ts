import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ToDo} from "../components/models/todo-item";
import 'react-toastify/dist/ReactToastify.css';

export interface TodoState {
    todos: ToDo[]
}

const initialState: TodoState = {
    todos: [],
}

export const TodoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        createAction: (state, action: PayloadAction<string>) => {
            const newToDo: ToDo ={
                id: state.todos.length,
                text: action.payload,
                isDone: false
            }

            state.todos = [...state.todos, newToDo]

        },
        updateAction: (state, action: PayloadAction<ToDo>) => {
            const newTodos = state.todos.map((item) => {
                if(item.id === action.payload.id) {
                    item.isDone = !item.isDone
                }
                return item
            })
            state.todos = newTodos
        },
        deleteAction: (state, action: PayloadAction<ToDo>) => {
            const newTodos = state.todos.filter(item => item.id !== action.payload.id)
            state.todos = newTodos
        },
    },
})


export const { createAction, updateAction, deleteAction } = TodoSlice.actions

export default TodoSlice.reducer