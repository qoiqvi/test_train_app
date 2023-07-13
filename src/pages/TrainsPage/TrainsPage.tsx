import { memo } from "react"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import { getTrains } from "../../model/selectors/getTrains"
import { fetchTrainsData } from "../../model/services/fetchTrainsData"
import { Link } from "react-router-dom"

export const TrainsPage = memo(() => {
	const dispatch = useAppDispatch()
	const trains = useAppSelector(getTrains)
	useEffect(() => {
		dispatch(fetchTrainsData())
	}, [dispatch])
	return (
		<section className="container">
			<h1 className="mt_10">Поезда</h1>
			<table className="mt_10 main_table">
				<thead>
					<tr>
						<th className="th">Поезд</th>
						<th className="th">Описание</th>
					</tr>
				</thead>
				<tbody>
					{trains.map((train) => (
						<tr key={train.name}>
							<td className="train_name">
								<Link to={`/train/${train.name}`}>{train.name}</Link>
							</td>
							<td className="train_description">{train.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	)
})
