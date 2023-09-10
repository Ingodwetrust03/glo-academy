import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import formReducer from './feature/form'
import themeReducer from './feature/themeList'
import {loadFromLocalStorage, saveLocalStorage} from "./helpers/storage";



export const store = configureStore({
    reducer: {
        todoList: todoReducer,
        form: formReducer,
        theme: themeReducer
    },
    preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch