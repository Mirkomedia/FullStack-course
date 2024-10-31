import React from 'react'
import Part from '../Subcomponents/Part'
const Content = (props) => {

  const renderParts = () => {
    if(props.parts)
      return  props.parts.map(({name, exercises, id}) => (
        
        <div key={'div'+id}>
          <Part key={id} name={name} exercises={exercises} />
        </div>
      ))
    
  }
  return (
    <div>

      {renderParts()}
    </div>
  )
}

export default Content