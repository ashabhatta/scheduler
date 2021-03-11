import { useEffect, useState } from 'react';
import '../stylesheets/Home.css';
import base from '../api/base';

import Patient from './Patient';
import Addpatient from './Addpatient';
import Home from './Home'

function PatientData() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    base('patients')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setPatients(records);
        fetchNextPage();
      });
  }, []);

  return (
    <div className="Home">
      
      <div className="row">
        {patients.length > 0 ? (
          <>
            {patients.map((e) => (
              <Patient key={e.id} patient={e} />
            ))}
          </>
        ) : (
          <div className="spinner-border mx-auto text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div>
      </div>
    </div>
  );
}

export default PatientData;
