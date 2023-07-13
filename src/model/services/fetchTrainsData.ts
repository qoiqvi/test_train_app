import { createAsyncThunk } from "@reduxjs/toolkit"
import { Train } from "../types/train"
import axios from "axios"

export const fetchTrainsData = createAsyncThunk<Train[], void, { rejectValue: string }>(
	"trains/fetchTrainsData",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get<Train[]>(
				"https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json"
			)
			if (!response.data) {
				throw new Error()
			}

			return response.data
		} catch (error) {
			return rejectWithValue("Ошибка при получение данных")
		}
	}
)
