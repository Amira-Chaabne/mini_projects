import { configureStore } from "@reduxjs/toolkit"


export const store = configureStore({
    reducer: {
        // Here will be all our slices
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch