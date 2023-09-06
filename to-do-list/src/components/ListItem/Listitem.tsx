import {ToDo} from "../models/todo-item";
import classes from "./Listitem.module.scss"

export const ListItem = ({todo}: {todo: ToDo}) => {
    return(
            <a
                href={`/list/${todo.id}`}
                className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}>{todo.text}</a>
    )
}