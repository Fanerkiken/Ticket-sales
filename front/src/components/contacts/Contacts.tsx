import React from 'react'
import styles from './Contacts.module.scss'
import Navigation from '../navigation/Navigation'
import Maps from './Maps'
import Footer from '../footer/Footer'

const Contacts = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.mainInformation}>
        <div className={styles.title}>
          Адреса и телефоны офисов транспортной компании «С Ветерком Тур»
        </div>
        <div className={styles.descriptions}>
          <div className={styles.addressWithPhoneNumbers}>
            <span className={styles.address}>
              г. Гомель, пл. Привокзальная, 1, 7 этаж, офис 723 (гостиница «Гомель» , рядом с ж/д
              вокзалом)
            </span>
            <div className={styles.phoneNumbers}>
              <a href="tel:+74951234567">+7 (495) 123-45-67</a>
              <a href="tel:+74951234562">+7 (495) 123-45-62</a>
            </div>
          </div>
          <div className={styles.addressWithPhoneNumbers}>
            <span className={styles.address}>
              ст. метро Саларьево (Сокольническая- красная линия) – первый вагон из центра , не
              выходя на улицу следовать по информационным указателям «ТПУ Саларьево».
            </span>
            <div className={styles.phoneNumbers}>
              <a href="tel:+74951234563">+7 (495) 123-45-63</a>
              <a href="tel:+74951234561">+7 (495) 123-45-61</a>
            </div>
          </div>
        </div>
      </div>
      <Maps />
      <Footer />
    </div>
  )
}

export default Contacts
