import classes from './ToDoList.module.scss'
import {ToDoListItem} from "./ToDoListItem/ToDoListItem";
import {ToDo} from "../models/todo-item";

export const ToDoList = (props: {todos: ToDo[], updateToDo: Function, deleteToDo: Function}) => {


    const checkedList: Function = () => {
       return props.todos
            .filter((elem) => !elem.isDone)
            .map((item, index) => {
                return (
                    <ToDoListItem
                        ToDoItem={item}
                        key={index}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}/>
                )
            })
    }

    const unCheckedList: Function = () => {
        return props.todos
            .filter((elem) => elem.isDone)
            .map((item, index) => {
                return (
                    <ToDoListItem
                        ToDoItem={item}
                        key={index}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}/>
                )
            })
    }
    return (
        <div className={classes.container}>
            <ul className="todo-list failed">
                {checkedList()}

            </ul>
            <ul className="todo-list completed">
                {unCheckedList()}
            </ul>


        </div>
    )
}