import "./app.css";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import SetupCreate from "./pages/SetupCreate";

function App() {
	return (
		<Routes>
			<Route path="/" element={<FirstPage />} />
			<Route path="/Setup1" element={<SecondPage />} />
			<Route path="/Setup1/Setup/Create" element={<SetupCreate />} />
		</Routes>
	);
}

export default App;
