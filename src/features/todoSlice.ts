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
        updateTodo: (state, action: PayloadAction<TodoState>) => {
            const { id, title, desc } = action.payload
            const found = state.find(todo => todo.id === id)
            if (found) {
                found.title = title
                found.desc = desc
            }
        },

    }
})

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer