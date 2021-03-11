import React from 'react';
import Deletebtn from './Deletebtn';

function Patient({ patient }) {
  const patientId = patient.id;
  return (
    <div className="col-md-4">
      <div className="card homeCards mb-4">
        <div className="card-header d-flex flex-column position-relative justify-content-center">
          <h4 className="fw-bold">{patient.fields.Name}</h4>
          
          <Deletebtn patientID={patientId} />
        </div>
        <div className="card-body">
          <div className="d-flex flex-column justify-content-center">
            <p className="text-muted"><b>{patient.fields.Description}</b></p>
            <span>
              <i className="bi bi-phone-fill me-2"></i>
              {patient.fields.Phone}
            </span>
            <span>
              <i className="bi bi-envelope-fill me-2"></i>
              {patient.fields.Email}
            </span>
          </div>
          <p className="card-text">Scheduled for: {patient.fields.Schedule}</p>
        </div>
      </div>
    </div>
  );
}

export default Patient;
