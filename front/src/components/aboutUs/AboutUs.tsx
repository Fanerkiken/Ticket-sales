import React from 'react'
import Navigation from '../navigation/Navigation'
import styles from './AboutUs.module.scss'
import Footer from '../footer/Footer'

const AboutUs = () => {
  return (
    <div className={styles.header}>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.descriptionWithTitle}>
          <div className={styles.title}>Транспортная компания «С Ветерком Тур»</div>
          <div className={styles.description}>
            <span>
              Наша компания занимается междугородними, международными, заказными пассажирскими
              перевозками на комфортабельных автобусах.
            </span>
            <span>
              Сотрудники компании «С Ветерком Тур» имеют огромный опыт в пассажирских перевозках.
              Все водители 1-го класса и с большим стажем работы в международных пассажирских
              перевозках.
            </span>
            <span>Мы знаем дороги, по которым мы едем.</span>
            <span>
              В основе компании — чувство ответственности за своих пассажиров и доброжелательность
              сотрудников.
            </span>
            <span>
              Автобусные перевозки осуществляются комфортабельным транспортом. А помимо
              традиционного оборудования (телевизора, кондиционера) следует знать, что наибольший
              комфорт вас ожидает в автобусе с предоставлением WI-FI, пледов и подушек.
            </span>
            <span>
              Компания «С Ветерком Тур» осуществляет перевозки пассажиров только на современных
              автобусах производителя SETRA, NEOPLAN, BOVA, MERCEDES-BENZ, VOLKSWAGEN с количеством
              посадочных мест 47-52.
            </span>
            <span>
              Наша компания предоставляет возможность аренды автобусов и микроавтобусов с
              количеством мест 8-52.
            </span>
            <span>
              Цель нашей компании — предложить пассажирам полный, качественный спектр услуг и
              своевременно реагировать на все замечания и предложения.
            </span>
          </div>
          <div className={styles.stats}>
            <div className={styles.amountOfProgress}>
              <div className={styles.amount}>5+</div>
              <div className={styles.progress}>ЛЕТ ОПЫТА И СОВЕРШЕНСТВОВАНИЯ</div>
            </div>
            <div className={styles.amountOfProgress}>
              <div className={styles.amount}>30+</div>
              <div className={styles.progress}>СОВРЕМЕННЫХ АВТОБУСОВ</div>
            </div>
            <div className={styles.amountOfProgress}>
              <div className={styles.amount}>2500+</div>
              <div className={styles.progress}>УСПЕШНЫХ ПЕРЕВОЗОК</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
