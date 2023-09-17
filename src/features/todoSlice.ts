import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { reduxTodoLis } from "../data/reduxTodoList"

export interface TodoState {
    id: number
    title: string
    desc: string
}

const initialState: TodoState[] = reduxTodoLis

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoState>) => {
            state.push(action.payload)
        },
        // removeTodo: (state, action: PayloadAction<number>) => {
        //     state.value.splice(action.payload, 1)
        // }
    }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer