import classes from './Form.module.scss'
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {clearValueAction, getValueAction} from "../../feature/form";
import {createAction} from "../../feature/todoList";
import {toast} from "react-toastify";

export const Form = () => {
    const formValue = useSelector((state: RootState) => state.form.text)
    const dispatch = useDispatch()
    const updateNotify = () => toast("Список дел успешно обновлен!");

    const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
        if (formValue) {
            dispatch(createAction(formValue))
            dispatch(clearValueAction())
            updateNotify()
        }
    }
    return (
        <div className={classes.wrapper}>
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input value={formValue} type="text" onChange={(e:React.FormEvent<HTMLInputElement>) => dispatch(getValueAction(e.target)) }/>
                    <button></button>
                </label>
            </form>
        </div>
    )
}