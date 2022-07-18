import {useState, useEffect} from 'react'
import './App.css'
import Header from './components/Header/Header'
import FormContainer from './components/FormContainer/FormContainer'
import PatientList from './components/PatientList/PatientList'

function App() {
  const [arrPatients, setArrPatients] = useState([]) 
  const [editPatient, setEditPatient] = useState({})


  useEffect(() => {
    const getLS = () => {
      const patientLS = JSON.parse(localStorage.getItem('patients')) ?? []
      setArrPatients(patientLS)
    }
    getLS()
  }, [])
  

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(arrPatients))

  }, [arrPatients])
  

  const deletePatient = id => {
    console.log("Paciente eliminado", id)
    const patientRefresh = arrPatients.filter(patient => patient.id !== id)
    setArrPatients(patientRefresh)
  }

  return (
    <div>
      <Header/>
      <div className="mt-12 md:flex ">
      <FormContainer arrPatients={arrPatients} setArrPatients={setArrPatients} editPatient={editPatient} setEditPatient={setEditPatient}/>
      <PatientList arrPatients={arrPatients} setEditPatient={setEditPatient} deletePatient={deletePatient} />
      </div>
    </div>
  )
}

export default App
