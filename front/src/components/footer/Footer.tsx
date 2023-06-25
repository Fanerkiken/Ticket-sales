import React from 'react'
import styles from './Footer.module.scss'
import whatsUppSvg from '../../assets/whatsUpp.svg'
import in100gram from '../../assets/in100gram.svg'
import vk from '../../assets/vk.svg'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.block}>
        <span className={styles.title}>С Ветерком Тур</span>
        <span>
          УНП 490845803 246017 г.Гомель ул.Привокзальная,1 каб.723{' '}
          <a className={styles.link} href="sveterkomtur@yandex.ru">
            sveterkomtur@yandex.ru
          </a>
        </span>
      </div>
      <div className={styles.block}>
        <span className={styles.title}>Контакты</span>
        <div className={styles.phoneNumbers}>
          <span>+375 29 678-43-03 </span>
          <span>+375 29 768-43-03 </span>
          <span>+7 495 146-42-02 </span>
        </div>
      </div>
      <div className={styles.block_withIcons}>
        <div className={styles.socialMedia}>
          <a href="https://www.instagram.com">
            <img className={styles.icon} src={in100gram} alt="insta" />
          </a>
          <a href="https://www.vk.com">
            <img className={styles.icon} src={vk} alt="whatsUpp" />
          </a>
          <a href="https://www.whatsup.com">
            <img className={styles.icon} src={whatsUppSvg} alt="whatsUpp" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
