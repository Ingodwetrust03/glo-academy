import {ToDo} from "../../models/todo-item";
import {ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText} from "./ToDoListItem.styled";
import checkIcon from "../../../assets/images/check.png"
import uncheckIcon from "../../../assets/images/uncheck.png"
import trashIcon from "../../../assets/images/trash.png"

export const ToDoListItem = (props: {ToDoItem: ToDo, updateToDo: Function, deleteToDo: Function}) => {
    return (

            <ToDoItem>
                <ToDoItemText>{props.ToDoItem.text}</ToDoItemText>
                <ToDoItemControls>
                    <ToDoItemControl
                        className="btn-trash"
                        icon={trashIcon}
                        onClick={() => {props.deleteToDo(props.ToDoItem)}}>
                    </ToDoItemControl>
                    <ToDoItemControl
                        icon={props.ToDoItem.isDone ? checkIcon : uncheckIcon}
                        onClick={() => {props.updateToDo(props.ToDoItem)}}>
                    </ToDoItemControl>
                </ToDoItemControls>
            </ToDoItem>

    )
}