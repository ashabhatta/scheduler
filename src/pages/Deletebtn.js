import React from "react";
import base from "../api/base";
import { useHistory } from "react-router-dom";

function Deletebtn({ patientID }) {
  const history = useHistory();

	const deletePatient = () => {
		base("patients").destroy(patientID, function (err, deletePatient) {
			if (err) {
				console.error(err);
				return;
			} else {
				history.push("/");
			}
		});
	};
	return (
		<div className="position-absolute">
			<button
				onClick={deletePatient}
				type="button"
				className="btn btn-warning"
			>
				<i className="bi bi-archive-fill"></i>
			</button>
		</div>
	);
}

export default Deletebtn;
