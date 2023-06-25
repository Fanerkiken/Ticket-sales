import React from 'react'
import styles from './BaseInput.module.scss'
import { InputHTMLAttributes } from 'react'

type BaseInputProps = {
  error: string | undefined
  register: any
} & InputHTMLAttributes<HTMLInputElement>

const BaseInput = (props: BaseInputProps) => {
  const { error, register, ...rest } = props
  return (
    <div className={styles.container}>
      <input type="text" className={styles.htmlInput} {...rest} {...register} />
      <span className={styles.error}>{error}</span>
    </div>
  )
}

export default BaseInput
