import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {clearValueAction, getValueAction} from "../../feature/form";
import {createAction} from "../../feature/todoList";
import {toast} from "react-toastify";
import {FormWrapper, FormBlock, FormField, FormLabel, FormControl} from "./Form.styled"
import plusIcon from "../../assets/images/plus.png"

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
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField value={formValue} type="text" onChange={(e:React.FormEvent<HTMLInputElement>) => dispatch(getValueAction(e.target)) }/>
                    <FormControl icon={plusIcon}/>
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}