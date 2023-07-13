import { TrainCharacteristics } from "../model/types/train"

export const validateArrayValues = (arr: TrainCharacteristics[] | undefined, setIsValid: (arg: boolean) => void) => {
	if (arr) {
		let errorrArr: string[] = []
		for (let i = 0; i < arr.length; i++) {
			const { engineAmperage, force, speed } = arr[i]
			const validateSpeedInput = () => {
				const validSpeed = /^\d+$/
				if (validSpeed.test(String(speed))) {
					return setIsValid(true)
				} else {
					errorrArr.push("speedError")
				}
			}

			const validateForceInput = () => {
				const validForce = /^\d+(\.\d+)?$/
				if (validForce.test(String(force))) {
					return setIsValid(true)
				} else {
					errorrArr.push("forceError")
				}
			}

			const validateAmperageInput = () => {
				const validAmperage = /^\d+$/
				if (validAmperage.test(String(engineAmperage))) {
					return setIsValid(true)
				} else {
					errorrArr.push("amperageError")
				}
			}
			validateSpeedInput()
			validateForceInput()
			validateAmperageInput()
		}
		return errorrArr
	}
}
