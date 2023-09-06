import {Form} from "../components/Form/Form";
import {ToDoList} from "../components/ToDoList/ToDoList";
import {ToDo} from "../components/models/todo-item";
import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToDoListPage = () => {
    const[todos, setTodos] = useState<ToDo[]>([
        {
            id: 0,
            text: "Первая задача",
            isDone: false
        },
        {
            id: 1,
            text: "Вторая задача",
            isDone: true
        },
        {
            id: 2,
            text: "Третья задача",
            isDone: true
        }
    ])

    const deleteNotify = () => toast("Удалено успешно!");
    const updateNotify = () => toast("Список дел успешно обновлен!");
    const createNewToDo: Function = (text: string) => {
       const newToDo: ToDo ={
           id: todos.length,
           text: text,
           isDone: false
        }

        setTodos([...todos, newToDo])
        updateNotify()
    }

    const updateToDo = (ToDoItem: ToDo) => {
        const newTodos: ToDo[] = todos.map((item) => {
            if(item.id === ToDoItem.id) {
                item.isDone = !ToDoItem.isDone
            }
            return item
        })
        setTodos(newTodos)
        updateNotify()
    }
    const deleteToDo = (ToDoItem: ToDo) => {
        const newTodos = todos.filter(item => item.id !== ToDoItem.id)
        setTodos(newTodos)
        deleteNotify()

    }


    return (
        <>

            <Form createNewToDo={createNewToDo}/>
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
        </>
    )
}