import classes from './ToDoList.module.scss'
import {ToDoListItem} from "./ToDoListItem/ToDoListItem";

export const ToDoList = () => {
    return (
        <div className={classes.container}>
            {/*<ul className="todo-list failed">
                <li className="todo-list-item__wrapper">
                    <span>Первая задача</span>
                    <div className="todo-list-item__buttons">
                        <button className="btn-trash"></button>
                        <button className="btn-check"></button>
                    </div>
                </li>
            </ul>*/}

            <ToDoListItem />
            <ToDoListItem />
        </div>
    )
}