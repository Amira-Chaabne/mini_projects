import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: []
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {}
})

export default todoSlice.reducer