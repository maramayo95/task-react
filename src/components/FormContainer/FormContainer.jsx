
import ContentTitle from '../ContentTitle/ContentTitle'
import Form from '../Form/Form'

const FormContainer = ({arrPatients, setArrPatients, editPatient, setEditPatient}) => {

  return (
    <div className="md:w-1/2 lg:w-2/5 p-3">
      <ContentTitle title="Seguimiento pacientes" paragraph="Añade pacientes y" spanText=" administralos" />
      <Form arrPatients={arrPatients} setArrPatients={setArrPatients} editPatient={editPatient} setEditPatient={setEditPatient} />
    
    </div>
  )
}

export default FormContainer