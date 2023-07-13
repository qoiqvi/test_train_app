import { StateSchema } from "../store/store"

export const getTrains = (state: StateSchema) => state.train.trains
