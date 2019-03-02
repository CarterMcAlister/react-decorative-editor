import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import editorStyles from './editor-styles.module.scss'
import TextLine from './text-line'

function DecorativeEditor ({ text, darkMode, speed, cursor, maxWidth }) {
  const lines = text.split(/\r\n|\r|\n/)
  const [lineIndex, setLineIndex] = useState(0)
  const [renderedLines, setRenderedLines] = useState([])

  // Adds a line of the passed text to the editor
  const addLine = () => {
    if (lineIndex < lines.length) {
      setLineIndex(lineIndex + 1)
      const newLine = lines[lineIndex]
      setRenderedLines([...renderedLines, newLine])
    }
  }

  // Add the first line when the component loads
  useEffect(() => {
    addLine()
  }, [])

  return (
    <div className={editorStyles.codeEditor} style={{maxWidth: maxWidth}}>
      <div className={editorStyles.codeEditorHeader} style={{background: darkMode ? '#383B4C' : '#f6f9fc'}}>
        <span className={editorStyles.codeEditorDot} />
        <span className={editorStyles.codeEditorDot} />
        <span className={editorStyles.codeEditorDot} />
      </div>
      <div className={editorStyles.codeEditorBody} style={{background: darkMode ? '#252831' : '#FDFDFD'}}>
        <div className={editorStyles.codeEditorNumberCol} style={{color: darkMode ? '#4c5067' : '#67686c'}}>
          {lines.map((line, index) =>
            <div className={editorStyles.codeEditorLineNumber} key={index}>{index + 1}</div>
          )}
        </div>
        <div className={editorStyles.codeEditorContents} style={{color: darkMode ? '#FDFDFD' : '#2f2f2f'}}>
          {renderedLines.map((line, index) =>
            <TextLine text={line} key={index} speed={speed} addLine={addLine} cursor={cursor} lineIndex={lineIndex} />
          )}
        </div>
      </div>
    </div>
  )
}

DecorativeEditor.propTypes = {
  text: PropTypes.string.isRequired,
  darkMode: PropTypes.bool,
  speed: PropTypes.number,
  cursor: PropTypes.bool,
  maxWidth: PropTypes.string
}

DecorativeEditor.defaultProps = {
  speed: 100,
  cursor: false,
  maxWidth: '540px'
}

export default DecorativeEditor
