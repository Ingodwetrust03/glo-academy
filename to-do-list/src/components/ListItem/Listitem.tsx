import {ToDo} from "../models/todo-item";
import {ListitemLink} from "./Listitem.styled";

export const ListItem = ({todo}: {todo: ToDo}) => {
    return(
            <ListitemLink
                to={`/list/${todo.id}`}
                target="_blank"
                rel="noreferrer"
                color={todo.isDone ? "green" : "red"}>
                {todo.text}
            </ListitemLink>
    )
}