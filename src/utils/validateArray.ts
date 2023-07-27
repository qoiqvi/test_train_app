import { TrainCharacteristics } from "../model/types/train"

export const validateArrayValues = (arr: TrainCharacteristics[] | undefined, setIsValid: (arg: boolean) => void) => {
	if (arr) {
		let errorrArr: string[] = []

		const validateSpeedInput = (speed: number) => {
			const validSpeed = /^\d+$/
			if (validSpeed.test(String(speed))) {
				return setIsValid(true)
			} else {
				errorrArr.push("speedError")
			}
		}

		const validateForceInput = (force: number) => {
			const validForce = /^\d+(\.\d+)?$/
			if (validForce.test(String(force))) {
				return setIsValid(true)
			} else {
				errorrArr.push("forceError")
			}
		}
		const validateAmperageInput = (engineAmperage: number) => {
			const validAmperage = /^\d+$/
			if (validAmperage.test(String(engineAmperage))) {
				return setIsValid(true)
			} else {
				errorrArr.push("amperageError")
			}
		}

		for (let i = 0; i < arr.length; i++) {
			const { engineAmperage, force, speed } = arr[i]
			validateSpeedInput(speed)
			validateForceInput(force)
			validateAmperageInput(engineAmperage)
		}
		return errorrArr
	}
}
