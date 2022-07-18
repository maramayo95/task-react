import ContentTitle from '../ContentTitle/ContentTitle'
import Patient from '../Patient/Patient'

const PatientList = ({arrPatients , setEditPatient, deletePatient}) => {


  return (
    <div className="md:w-1/2 md:h-screen lg:w-3/5 p-3">
     {arrPatients > 0 ? <div>
        <ContentTitle title="Listado de pacientes" paragraph="Administra tus" spanText=" pacientes y citas" />
      </div>: 
      <ContentTitle title="No se han ingresado pacientes" paragraph="Completa el" spanText="formulario"/> } 
      
      
      <div className="h-screen overflow-y-scroll">

      {arrPatients?.map(patient => <Patient key={patient.id} patient={patient} setEditPatient={setEditPatient} deletePatient={deletePatient}/> )}      

      </div>
    </div>
  )
}

export default PatientList