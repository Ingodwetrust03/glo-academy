import classes from './Form.module.scss'
import {useState} from "react";

export const Form = (props: {createNewToDo: Function}) => {
const [text, setText] = useState<string>('')

    const formSubmit = (e) => {
    e.preventDefault(e)
        if (text) {
            props.createNewToDo(text)
            setText('')
        }
    }
    return (
        <div className={classes.wrapper}>
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input value={text} type="text" onChange={(e) =>setText(e.target.value) }/>
                    <button></button>
                </label>
            </form>
        </div>
    )
}