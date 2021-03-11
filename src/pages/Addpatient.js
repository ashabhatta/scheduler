import React, { useRef } from "react";
import base from "../api/base";
import { useHistory } from "react-router-dom";

function Addpatient() {
	const nameRef = useRef();
	const descriptionRef = useRef();
	const emailRef = useRef();
	const numberRef = useRef();
	const scheduleRef = useRef();
	const history = useHistory();

	const addPatient = (e) => {
		e.preventDefault();
		const Name = nameRef.current.value;
		const Description = descriptionRef.current.value;
		const Email = emailRef.current.value;
		const Phone = numberRef.current.value;
		const Schedule = scheduleRef.current.value;
		base("patients").create(
			{ Name, Description, Email, Phone, Schedule },
			function (err, record) {
				if (err) {
					console.error(err);
					return;
				} else {
					history.push("/patientdata");
				}
			},
		);
	};
	return (
		<div className="mt-5 card p-5 form-add">
			<h4 className="mb-5">Add patients</h4>
			<form onSubmit={addPatient}>
				<div className="mb-3">
					<label
						htmlFor="exampleInputEmail1"
						className="form-label text-start d-block"
					>
						Patient Name
					</label>
					<input
						required
						placeholder="Full name"
						type="name"
						className="form-control"
						id="exampleInputName"
						aria-describedby="nameHelp"
						ref={nameRef}
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="exampleInputPassword1"
						className="form-label text-start d-block"
					>
						Description
					</label>
					<input
						required
						placeholder="Appointment detail"
						type="text"
						className="form-control"
						id="exampleTitle"
						ref={descriptionRef}
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="exampleInputEmail1"
						className="form-label text-start d-block"
					>
						Email address
					</label>
					<input
						required
						placeholder="Email"
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						ref={emailRef}
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="exampleInputPassword1"
						className="form-label text-start d-block"
					>
						Phone Number
					</label>
					<input
						required
						placeholder="Phone Number"
						type="number"
						className="form-control"
						id="exampleInputNumber"
						ref={numberRef}
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="exampleInputPassword1"
						className="form-label text-start d-block"
					>
						Schedule
					</label>
					<input
						required
						type="datetime-local"
						className="form-control"
						id="exampleDate"
						ref={scheduleRef}
					/>
				</div>
				<button
					type="submit"
					onClick={addPatient}
					className="mt-4 btn btn-primary d-block"
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Addpatient;
