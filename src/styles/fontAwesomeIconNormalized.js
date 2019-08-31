import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FontAwesomeIconNormalized = (props) => {
  const { maxWidth = '1em' } = props
  return <FontAwesomeIcon style={{ maxWidth }} {...props}/>
}

export default FontAwesomeIconNormalized