import React, { useState } from 'react'
import styles from './QuestionWithDescription.module.scss'

type QuestionWithDescriptionType = {
  question: string
  render: () => string
}

const QuestionWithDescription = (props: QuestionWithDescriptionType) => {
  const { question, render } = props
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <div className={styles.faq} onClick={toggleOpen}>
      <div className={`${styles.title} ${open && styles.title_open}`}>{question}</div>
      <span className={`${styles.arrow} ${open && styles.arrow_open}`}></span>
      {open && <div className={`${styles.description} ${styles.description_open}`}>{render()}</div>}
    </div>
  )
}

export default QuestionWithDescription
