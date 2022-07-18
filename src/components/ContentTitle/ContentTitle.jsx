

const ContentTitle = ({title, paragraph, spanText}) => {
 
  return (
    <>
      <h2 className="font-black text-3xl text-center text-gray-700  ">{title}</h2>
      <p className="text-lg mt-5 text-center">{paragraph}
        <span className="text-orange-500 font-bold "> {spanText}</span>
      </p>

    </>
  )
}

export default ContentTitle