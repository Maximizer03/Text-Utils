import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			message: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	};
	const toggleMode = () => {
		if (mode === "dark") {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light mode has been enabled", "success");
			document.title = "Text Utils Light Mode";
		} else {
			setMode("dark");
			document.body.style.backgroundColor = "#233142";
			showAlert("Dark mode has been enabled", "success");
			document.title = "Text Utils Dark Mode";
		}
	};
	return (
		<>
			{/* <Router> */}
			<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
			<Alert alert={alert} />
			<div className="container my-3">
				{/* <Switch> */}
				{/* <Route exact path="/about"> */}
				{/* <About /> */}
				{/* </Route> */}
				{/* <Route exact path="/"> */}
				<Textform heading="TextBox" mode={mode} showAlert={showAlert} />
				{/* </Route> */}
				{/* </Switch> */}
			</div>
			{/* </Router> */}
		</>
	);
}

export default App;
