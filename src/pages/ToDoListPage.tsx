import {Form} from "../components/Form/Form";
import {ToDoList} from "../components/ToDoList/ToDoList";
import {ToDo} from "../models/todo-item";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import { deleteAction, updateAction} from "../feature/todoList";

export const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()
    const deleteNotify = () => toast("Удалено успешно!");
    const updateNotify = () => toast("Список дел успешно обновлен!");



    const updateToDo = (ToDoItem: ToDo) => {
      dispatch(updateAction(ToDoItem))
        updateNotify()
    }
    const deleteToDo = (ToDoItem: ToDo) => {
       dispatch(deleteAction(ToDoItem))
        deleteNotify()

    }


    return (
        <>

            <Form />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
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