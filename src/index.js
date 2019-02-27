import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import editorStyles from './editor-styles.module.scss'

import TextLine from './text-line'

function DecorativeEditor ({ text, nightMode, speed, cursor }) {
  // const [editorText, setEditorText] = useState(0)

  const lines = text.split(/\r\n|\r|\n/)

  return (
    <div className={editorStyles.codeEditor}>
      <div className={editorStyles.codeEditorHeader} style={{background: nightMode ? '' : '#f6f9fc'}}>
        <span className={editorStyles.codeEditorDot} />
        <span className={editorStyles.codeEditorDot} />
        <span className={editorStyles.codeEditorDot} />
      </div>
      <div className={editorStyles.codeEditorBody} style={{background: nightMode ? '' : '#fff'}}>
        <div className={editorStyles.codeEditorNumberCol}>
          {lines.map((line, index) =>
            <div key={index}>{index + 1}</div>
          )}
        </div>
        <div className={editorStyles.codeEditorContents}>
          {lines.map((line, index) =>
            <TextLine text={line} className={editorStyles.codeEditorLine} key={index+10} doTyping={true} />
          )}
        </div>
      </div>
    </div>
  )
}

export default DecorativeEditor
