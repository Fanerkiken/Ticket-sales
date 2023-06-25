import React from 'react'
import styles from './Card.module.scss'

type CardType = {
  title: string
  price: string
  description: string
  img: string
}
const Card = (props: CardType) => {
  const { price, title, description, img } = props
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgBx} style={{ backgroundImage: `url(${img})` }}></div>
        <div className={styles.content}>
          <span className={styles.price}>
            <a href="">{price}</a>
          </span>
          <div className={styles.title}>{title}</div>
          {description}
        </div>
      </div>
    </div>
  )
}

export default Card
