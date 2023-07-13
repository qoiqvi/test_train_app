import { type ChangeEvent, type InputHTMLAttributes, memo, useState } from "react"
import { validateData } from "../../utils/validateData"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">
export type ValidationType = "amperage" | "force" | "speed"

export interface InputProps extends HTMLInputProps {
	value: number | undefined | string
	type: ValidationType
	index?: number
	onChange?: (value: string, index: number) => void
}

export const Input = memo((props: InputProps) => {
	const { value, onChange, index, type, ...otherProps } = props
	const [isOk, setIsOk] = useState(true)

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (index !== undefined) {
			onChange?.(e.target.value, index)
		}
		validateData(type, e.target.value, setIsOk)
	}

	return (
		<div className={"inputComp"}>
			<input
				style={{ color: isOk ? "black" : "red" }}
				value={value as string}
				onChange={onChangeHandler}
				{...otherProps}
			/>
		</div>
	)
})
