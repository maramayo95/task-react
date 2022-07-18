
import { AiFillDelete,  AiTwotoneEdit } from "react-icons/ai";

const Patient = ({patient, setEditPatient, deletePatient}) => {
  const {namePatient, nameDoctor, email, discharge, symptoms, id} = patient

  const handleDelete = () => {
   const respuesta =   confirm("Desea eliminar el paciente")
   if(respuesta){
    deletePatient(id)
   } 
  }

  return (
    <>
      <div className=" bg-white py-10 px-5 m-6 shadow-md rounded-md">
      <div className="flex justify-end">
        <button type="button" className="py-2 px-3 bg-orange-300 hover:bg-orange-400 uppercase font-bold m-1 text-white" onClick={()=> setEditPatient(patient)}><AiTwotoneEdit/></button>
        <button type="button" className="py-2 px-3 bg-red-500 hover:bg-red-700 uppercase font-bold m-1 text-white" onClick={handleDelete}><AiFillDelete/></button>
      </div>
        
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: <span className="font-normal normal-case"> {namePatient}</span></p>
     
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: <span className="font-normal normal-case"> {nameDoctor}</span></p>
     
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font-normal normal-case"> {email}</span></p>
     
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: <span className="font-normal normal-case"> {discharge}</span></p>
     
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case"> {symptoms}</span></p>
    
      </div>

    </>
  )
}

export default Patient