import React, { useState } from 'react'
import PropTypes from 'prop-types'

import editorStyles from './editor-styles.module.scss'
import TextLine from './text-line'

function DecorativeEditor ({ text, darkMode, speed, showCursor }) {
  const lines = text.split(/\r\n|\r|\n/)
  const [renderedLines, setRenderedLines] = useState([lines[0]])

  const addLine = (i) => {
    if (i < lines.length) {
      const newLine = lines[i]
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
            <TextLine text={line} className={editorStyles.codeEditorLine} ind={index} key={index + 10} speed={100} addLine={addLine} />
          )}
        </div>
      </div>
    </div>
  )
}

export default DecorativeEditor
