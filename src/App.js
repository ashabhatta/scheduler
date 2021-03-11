import React from "react";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import Patient from "./pages/PatientData";
import Form from "./pages/Addpatient";
import Home from "./pages/Home";
import Headers from "./pages/Header";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Headers />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
				<Switch>
					<Route path="/patientdata">
						<Patient />
					</Route>
				</Switch>
				<Switch>
					<Route path="/form">
						<Form />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
