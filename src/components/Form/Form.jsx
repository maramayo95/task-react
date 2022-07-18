import {useState , useEffect} from 'react'
import { uniqueId } from '../../helper/randomId'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const Form = ({setArrPatients,  arrPatients , editPatient, setEditPatient }) => {
 const [namePatient, setNamePatient] = useState('')
 const [nameDoctor, setNameDoctor] = useState('')
 const [email, setEmail] = useState('')
 const [discharge, setDischarge] = useState('')
 const [symptoms, setSymptoms] = useState('')

 const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(editPatient).length > 0){
     const {namePatient,nameDoctor, email, discharge, symptoms } = editPatient
     
      console.log(editPatient)

      setNamePatient(namePatient)
      setNameDoctor(nameDoctor)
      setEmail(email)
      setDischarge(discharge)
      setSymptoms(symptoms)
      console.log("Hay un nuevo paciente")

    } 
  }, [editPatient])


 const handleSubmit =  (e) => {
    e.preventDefault()

    //Validacion del Formulario

    if([namePatient, nameDoctor, email, discharge, symptoms].includes('')){
      setError(true)
      return;
    } 

      setError(false)


      const objPatient = {
        namePatient,
        nameDoctor,
        email,
        discharge,
        symptoms
      }

      if(editPatient.id) {
        objPatient.id = editPatient.id
        const patientRefresh = arrPatients.map(patientState => patientState.id === editPatient.id ? objPatient : patientState )
        setArrPatients(patientRefresh)
        setEditPatient({})

      } else {
        objPatient.id = uniqueId()
        setArrPatients([...arrPatients, objPatient])
      }



      setNamePatient('')
      setNameDoctor('')
      setEmail('')
      setDischarge('')
      setSymptoms('')

    console.log('Enviando formulario')
 }

 
 
  return (
    <>
        <form className='bg-white shadow-md rounded-md py-10 px-5 m-6 ' onSubmit={handleSubmit}>
      {error && <ErrorMessage message="Se necesitan completar campos"/> }
      <div>
        <label htmlFor="paciente" className="block text-gray-700 uppercase font-bold">Nombre del Paciente</label>
        <input id="paciente" className="mt-2 bg-gray-100 rounded-md p-2 w-full" type="text" placeholder='Escriba el nombre del Paciente' value={namePatient} onChange={ (e) => setNamePatient(e.target.value)}/>
      </div>

      <div className="mt-5">
        <label htmlFor="medico" className="block text-gray-700 uppercase font-bold">Nombre del Médico</label>
        <input id="medico" className="mt-2 bg-gray-100 rounded-md p-2 w-full" type="text" placeholder='Escriba el nombre del Médico' value={nameDoctor} onChange={(e) => setNameDoctor(e.target.value)} />
      </div>
      
      <div className="mt-5">
        <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Ingrese un email</label>
        <input id="email" className="mt-2 bg-gray-100 rounded-md p-2 w-full" type="email" placeholder='Ingrese un email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>

      <div className="mt-5">
        <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Ingrese una fecha</label>
        <input id="alta" className="mt-2 bg-gray-100 rounded-md p-2 w-full" type="date" value={discharge} onChange={(e)=>setDischarge(e.target.value)} />
      </div>
      <div className="mt-5">
        <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
        <textarea id="sintomas" className="mt-2 bg-gray-100 rounded-md p-2 w-full" type="text" placeholder='Describe los síntomas' value={symptoms} onChange={(e)=>setSymptoms(e.target.value)} />
      </div>

      <input type="submit" className="mt-2 bg-orange-500 w-full p-3 text-white text-center uppercase font-bold hover:bg-orange-600 cursor-pointer transition-colors placeholder-white " value={editPatient.id ? 'Editar Paciente' : 'Agregar Paciente'}  />
    </form>

    </>
  )
}

export default Form