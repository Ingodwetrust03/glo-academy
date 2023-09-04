import {Header} from "../components/Header/Header";
import {Form} from "../components/Form/Form";
import {ToDoList} from "../components/ToDoList/ToDoList";
import {ToDo} from "../components/models/todo-item";
import {useState} from "react";

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


    const createNewToDo: Function = (text: string) => {
       const newToDo: ToDo ={
           id: todos.length,
           text: text,
           isDone: false
        }

        setTodos([...todos, newToDo])
    }

    const updateToDo = (ToDoItem: ToDo) => {
        const newTodos: ToDo[] = todos.map((item) => {
            if(item.id === ToDoItem.id) {
                item.isDone = !ToDoItem.isDone
            }
            return item
        })
        setTodos(newTodos)
    }
    const deleteToDo = (ToDoItem: ToDo) => {
        const newTodos = todos.filter(item => item.id !== ToDoItem.id)
        setTodos(newTodos)
    }


    return (
        <>
            <Header />
            <Form createNewToDo={createNewToDo}/>
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
        </>
    )
}