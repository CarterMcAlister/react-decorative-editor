import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './text-line.module.scss'

function textLine ({ text, speed, addLine, cursor, lineIndex }) {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState()
  const prevTypedText = useRef()
  let hasFocus = document.hasFocus()
  let i = 0

  // Adds the next character to the line being typed
  const typeCharacter = (doTyping) => {
    if (hasFocus) {
      const textString = prevTypedText.current + text.charAt(i)
      setTypedText(textString)
      i++

      // When all characters have been typed, end typing interval
      // and call parent func to add next line
      if (i >= text.length) {
        clearInterval(doTyping)
        setShowCursor(false)
        addLine(lineIndex)
      }
    }
  }

  // Set the current focus when focus changes,
  // so that text is not garbled as chrome trottles setInterval
  // when it is running in the background
  const checkFocus = () => {
    hasFocus = document.hasFocus()
  }

  // On component load:
  // - Call the type function on an interval
  // - Set the cursor state from props
  // - Add event listeners to pause typing when focus is lost
  useEffect(() => {
    const doTyping = setInterval(() => typeCharacter(doTyping), speed)
    setShowCursor(cursor)
    window.addEventListener('focus', checkFocus)
    window.addEventListener('blur', checkFocus)

    return () => {
      clearInterval(doTyping)

      window.removeEventListener('focus', checkFocus)
      window.removeEventListener('blur', checkFocus)
    }
  }, [])

  // Sets previous state of text when text changes,
  // so that previous state can be accessed when setting next character
  useEffect(() => {
    prevTypedText.current = typedText
  })

  return (
    <div className={styles.text}>
      <span className={showCursor ? styles.textCursor : ''}>{typedText}</span>
    </div>
  )
}

textLine.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  addLine: PropTypes.func.isRequired,
  lineIndex: PropTypes.number,
  cursor: PropTypes.bool
}

textLine.defaultProps = {
  speed: 100,
  cursor: false
}

export default textLine
