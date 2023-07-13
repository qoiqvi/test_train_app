import { ValidationType } from "../components/Input/Input"

export const validateData = (
	type: ValidationType,
	value: number | string | undefined,
	setIsOk: (arg: boolean) => void
) => {
	const validateSpeedInput = () => {
		const validSpeed = /^\d+$/
		const isSpeedValid = validSpeed.test(String(value)) && value !== ""
		setIsOk(isSpeedValid)
	}

	const validateForceInput = () => {
		const validForce = /^\d+(\.\d+)?$/
		const isForceValid = validForce.test(String(value)) && value !== ""
		setIsOk(isForceValid)
	}

	const validateAmperageInput = () => {
		const validAmperage = /^\d+$/
		const isAmperageValid = validAmperage.test(String(value)) && value !== ""
		setIsOk(isAmperageValid)
	}

	switch (type) {
		case "amperage":
			return validateAmperageInput()
		case "force":
			return validateForceInput()
		case "speed":
			return validateSpeedInput()
	}
}
