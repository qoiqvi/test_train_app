import { configureStore } from "@reduxjs/toolkit"
import { TrainStateSchema } from "../types/train"
import { TrainSlcieReducer } from "../slice/TrainSlcie"

export interface StateSchema {
	train: TrainStateSchema
}

export const store = configureStore<StateSchema>({
	reducer: {
		train: TrainSlcieReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
