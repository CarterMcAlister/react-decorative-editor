import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function textLine ({ text, className, speed }) {
  const [typedText, setTypedText] = useState('')
  const prevTypedText = useRef()

  useEffect(() => {
    let i = 0
    const doTyping = setInterval(() => {
      const textString = prevTypedText.current + text.charAt(i)
      setTypedText(textString)
      i++

      if (i >= text.length) {
        clearInterval(doTyping)
      }
    }, speed)

    return () => {
      clearInterval(doTyping)
    }
  }, [])

  useEffect(() => {
    prevTypedText.current = typedText
  })

  return (
    <div className={className}>
      {typedText}
    </div>
  )
}

export default textLine
