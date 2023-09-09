import {ToDoListItem} from "./ToDoListItem/ToDoListItem";
import {ToDo} from "../models/todo-item";
import {ToDoListBlock, ToDoListContainer} from "./ToDoList.styled";

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
        <ToDoListContainer>
            <ToDoListBlock className="failed">
                {checkedList()}

            </ToDoListBlock>
            <ToDoListBlock className="completed">
                {unCheckedList()}
            </ToDoListBlock>


        </ToDoListContainer>
    )
}