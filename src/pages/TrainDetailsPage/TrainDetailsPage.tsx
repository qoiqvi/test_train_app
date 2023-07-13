import { memo, useCallback, useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import { getTrains } from "../../model/selectors/getTrains"
import { fetchTrainsData } from "../../model/services/fetchTrainsData"
import { TrainSlcieActions } from "../../model/slice/TrainSlcie"
import { Input } from "../../components/Input/Input"
import { validateArrayValues } from "../../utils/validateArray"

export const TrainDetailsPage = memo(() => {
	const dispatch = useAppDispatch()
	const trains = useAppSelector(getTrains)
	const { name } = useParams()
	const [isValid, setIsValid] = useState(true)

	useEffect(() => {
		dispatch(fetchTrainsData())
	}, [dispatch])

	const trainByName = useMemo(() => trains.find((train) => train.name === name), [name, trains])

	const onChangeAmperage = useCallback(
		(value: string, index?: number) => {
			if (index !== undefined) {
				dispatch(TrainSlcieActions.changeAmperage({ index, name: trainByName?.name, value }))
			}
		},
		[dispatch, trainByName?.name]
	)

	const onChangeForce = useCallback(
		(value: string, index: number) => {
			if (index !== undefined) {
				dispatch(TrainSlcieActions.changeForce({ index, name: trainByName?.name, value }))
			}
		},
		[dispatch, trainByName?.name]
	)

	const onChangeSpeed = useCallback(
		(value: string, index: number) => {
			if (index !== undefined) {
				dispatch(TrainSlcieActions.changeSpeed({ index, name: trainByName?.name, value }))
			}
		},
		[dispatch, trainByName?.name]
	)

	const onClickValidation = useCallback(() => {
		const sortedBySpeed = trainByName?.characteristics.map((elem) => Number(elem.speed)).sort((a, b) => a - b)
		console.log(sortedBySpeed)
	}, [trainByName?.characteristics])

	useEffect(() => {
		const errors = validateArrayValues(trainByName?.characteristics, setIsValid)
		if (errors?.length) setIsValid(false)
	}, [trainByName?.characteristics])

	return (
		<div className="trainDetailsPage">
			<div className="header">
				<h1>Характеристики</h1>
				<h2>{trainByName?.name}</h2>
			</div>
			<section className="container">
				<table>
					<thead>
						<tr>
							<th>Ток двигателя</th>
							<th>Сила тяги</th>
							<th>Скорость</th>
						</tr>
					</thead>
					<tbody>
						{trainByName?.characteristics.map((item, index) => (
							<tr>
								<td>
									<Input
										value={item.engineAmperage}
										onChange={onChangeAmperage}
										type="amperage"
										index={index}
									/>
								</td>
								<td>
									<Input
										index={index}
										type="force"
										value={item.force}
										onChange={onChangeForce}
									/>
								</td>
								<td>
									<Input
										index={index}
										type="speed"
										value={item.speed}
										onChange={onChangeSpeed}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
			<button
				disabled={!isValid}
				onClick={onClickValidation}
				className="btn mt_10"
			>
				Отправить данные
			</button>
		</div>
	)
})
