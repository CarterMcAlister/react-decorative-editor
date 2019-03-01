import React, { useState } from 'react'
import PropTypes from 'prop-types'

import editorStyles from './editor-styles.module.scss'
import TextLine from './text-line'

function DecorativeEditor ({ text, darkMode, speed, cursor }) {
  const lines = text.split(/\r\n|\r|\n/)
  const [lineIndex, setLineIndex] = useState(0)
  const [renderedLines, setRenderedLines] = useState([lines[0]])

  const addLine = () => {
    if (lineIndex < lines.length) {
      setLineIndex(lineIndex + 1)
      const newLine = lines[lineIndex]
      setRenderedLines([...renderedLines, newLine])
    }
  }

  return (
    <div className={editorStyles.codeEditor}>
      <div className={editorStyles.codeEditorHeader} style={{background: darkMode ? '#383B4C' : '#f6f9fc'}}>
        <span className={editorStyles.codeEditorDot} />
        <span className={editorStyles.codeEditorDot} />
        <span className={editorStyles.codeEditorDot} />
      </div>
      <div className={editorStyles.codeEditorBody} style={{background: darkMode ? '#252831' : '#fff'}}>
        <div className={editorStyles.codeEditorNumberCol} style={{color: darkMode ? '#383B4C' : '#67686c'}}>
          {lines.map((line, index) =>
            <div key={index}>{index + 1}</div>
          )}
        </div>
        <div className={editorStyles.codeEditorContents} style={{color: darkMode ? '#fff' : '#000'}}>
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
  cursor: PropTypes.bool
}

export default DecorativeEditor
