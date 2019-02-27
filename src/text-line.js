import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function textLine ({ text, doTyping, className }) {
  const [typedText, setTypedText] = useState('')

  return (
    <div className={className}>
      {text}
    </div>
  )
}

export default textLine
