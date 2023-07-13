import React, { ReactNode } from "react"
import { Route, Routes } from "react-router-dom"
import { TrainsPage } from "../../pages/TrainsPage/TrainsPage"
import { TrainDetailsPage } from "../../pages/TrainDetailsPage/TrainDetailsPage"
import "../../index.css"

interface IRoute {
	path: string
	element: ReactNode
}

const routes: IRoute[] = [
	{
		path: "/trains",
		element: <TrainsPage />,
	},
	{
		path: "/train/:name",
		element: <TrainDetailsPage />,
	},
]

export const AppRouter = () => {
	return (
		<Routes>
			{routes.map(({ element, path }) => {
				return (
					<Route
						key={path}
						path={path}
						element={element}
					/>
				)
			})}
		</Routes>
	)
}
