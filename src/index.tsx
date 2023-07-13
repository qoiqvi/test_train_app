import ReactDOM from "react-dom/client"
import "./index.css"
import { Provider } from "react-redux"
import { store } from "./model/store/store"
import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { AppRouter } from "./components/AppRouter/AppRouter"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Navbar />
			<AppRouter />
		</BrowserRouter>
	</Provider>
)
