import { memo, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Navbar = memo(() => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate("/trains")
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<nav className="navbar">
			<h1>Train App</h1>
		</nav>
	)
})
