import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import formReducer from './feature/form'
import {loadFromLocalStorage, saveLocalStorage} from "./helpers/storage";



export const store = configureStore({
    reducer: {
        todoList: todoReducer,
        form: formReducer
    },
    preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch