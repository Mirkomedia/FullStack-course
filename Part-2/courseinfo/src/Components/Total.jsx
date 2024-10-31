import React from 'react'

const Total = (props) => {
  const renderTotal = () => {
   
      const total =  Object.entries(props.course)
      console.log(total);
        
  
  
  return (
    <div>
     
      <p><b>Number of exercises </b>{renderTotal()}</p>
    </div>
  )
}
}
export default Total