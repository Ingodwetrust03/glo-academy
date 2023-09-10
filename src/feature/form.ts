import { createSlice } from '@reduxjs/toolkit'


export interface formState {
    text: string
}

const initialState: formState = {
    text: '',
}

export const FormSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        getValueAction: (state, action) => {
            state.text = action.payload.value
        },
        clearValueAction: (state) => {
            state.text = ''
        }
    },
})


export const { getValueAction, clearValueAction } = FormSlice.actions

export default FormSlice.reducer