import {ToDo} from "../components/models/todo-item";
import {ListItem} from "../components/ListItem/Listitem";

interface ComponentProps {
    todos: ToDo[]
}
export const HomePage = ({todos}: ComponentProps) => {
    return (
        <div className="container">
            {
                todos.map((item: ToDo) => {
                    return (<ListItem todo={item} key={item.id} />)
                })
            }
        </div>

    )
}