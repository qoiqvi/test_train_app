export interface TrainCharacteristics {
	speed: number
	force: number
	engineAmperage: number
}

export interface Train {
	name: string
	description: string
	characteristics: TrainCharacteristics[]
}

export interface TrainStateSchema {
	trains: Train[]
	isLoading: boolean
	error?: string | undefined
}
