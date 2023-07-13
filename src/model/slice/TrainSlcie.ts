import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Train, TrainStateSchema } from "../types/train"
import { fetchTrainsData } from "../services/fetchTrainsData"

const initialState: TrainStateSchema = {
	trains: [],
	error: undefined,
	isLoading: false,
}

type ActionPayload = PayloadAction<{ index: number; name: string | undefined; value: string }>

export const TrainSlcie = createSlice({
	name: "TrainSlcie",
	initialState,
	reducers: {
		changeAmperage: (state, action: ActionPayload) => {
			if (action.payload.value !== undefined) {
				// @ts-ignore
				state.trains.find((train) => train.name === action.payload.name).characteristics[
					action.payload.index
				].engineAmperage = action.payload.value
			}
		},
		changeForce: (state, action: ActionPayload) => {
			if (action.payload.value !== undefined) {
				// @ts-ignore
				state.trains.find((train) => train.name === action.payload.name).characteristics[
					action.payload.index
				].force = action.payload.value
			}
		},
		changeSpeed: (state, action: ActionPayload) => {
			if (action.payload.value !== undefined) {
				// @ts-ignore
				state.trains.find((train) => train.name === action.payload.name).characteristics[
					action.payload.index
				].speed = action.payload.value
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTrainsData.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchTrainsData.fulfilled, (state, action: PayloadAction<Train[]>) => {
				state.trains = action.payload
				state.isLoading = false
			})
			.addCase(fetchTrainsData.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})
	},
})

export const { actions: TrainSlcieActions } = TrainSlcie
export const { reducer: TrainSlcieReducer } = TrainSlcie
