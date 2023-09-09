import {ToDo} from "../components/models/todo-item";
import {ListItem} from "../components/ListItem/Listitem";
import {useSelector} from "react-redux";
import {RootState} from "../store";


export const ViewList = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)

    return (
        <div className="container">
            {
                todoList.map((item: ToDo) => {
                    return (<ListItem todo={item} key={item.id} />)
                })
            }
        </div>

    )
}