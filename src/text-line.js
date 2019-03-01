import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './text-line.module.scss'

function textLine ({ text, speed, addLine, cursor, lineIndex }) {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState()
  const prevTypedText = useRef()
  let hasFocus = document.hasFocus()
  let i = 0

  const typeCharacter = (doTyping) => {
    if (hasFocus) {
      const textString = prevTypedText.current + text.charAt(i)
      setTypedText(textString)
      i++

      if (i >= text.length) {
        clearInterval(doTyping)
        setShowCursor(false)
        addLine(lineIndex)
      }
    }
  }

  const checkFocus = () => {
    hasFocus = document.hasFocus()
  }

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
