import React from 'react'
import Navigation from '../navigation/Navigation'
import styles from './Timetable.module.scss'
import Card from './Card'
import Footer from '../footer/Footer'

const Timetable = () => {
  return (
    <div className={styles.header}>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.cards_card}>
            <Card
              title={'Москва - Гомель'}
              description={
                'Отправление из Москвы в 22.00\n' +
                'Автовокзал «Саларьево»\n' +
                'пос. Московский, Киевское шоссе,\n' +
                '23-й км, д. 1, стр. 1 метро «Саларьево» Прибытие в Гомель в 7.30\n' +
                'Автовокзал, Курчатова, 1'
              }
              price={'2500 ₽'}
              img={'https://sveterkom.by/wp-content/uploads/2022/01/58456.jpg'}
            />
          </div>

          <div className={styles.cards_card}>
            <Card
              title={'Москва - Речица'}
              description={
                'Отправление из Москвы в 22.00\n' +
                'Автовокзал «Саларьево»\n' +
                'пос. Московский, Киевское шоссе,\n' +
                '23-й км, д. 1, стр. 1 метро «Саларьево» Прибытие в Речицу в 8.30'
              }
              price={'2500 ₽'}
              img={'https://sveterkom.by/wp-content/uploads/2022/01/20150919-8292-Thumb.jpg'}
            />
          </div>

          <div className={styles.cards_card}>
            <Card
              title={'Москва - Калинковичи'}
              description={
                'Отправление из Москвы в 22.00\n' +
                'Автовокзал «Саларьево»\n' +
                'пос. Московский, Киевское шоссе,\n' +
                '23-й км, д. 1, стр. 1 метро «Саларьево» Прибытие в Калинковичи в 9.45\n' +
                'парковка Казанского храма'
              }
              price={'2500 ₽'}
              img={'https://sveterkom.by/wp-content/uploads/2022/01/515555555.jpg'}
            />
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.cards_card}>
            <Card
              title={'Москва - Чечерск'}
              description={
                'Отправление из Москвы в 22.00\n' +
                'Автовокзал «Саларьево»\n' +
                'пос. Московский, Киевское шоссе,\n' +
                '23-й км, д. 1, стр. 1 метро «Саларьево» Прибытие в Чечерск в 9.25\n' +
                'ул.Советская, д.30'
              }
              price={'2500 ₽'}
              img={'https://sveterkom.by/wp-content/uploads/2022/12/258-1.jpg'}
            />
          </div>

          <div className={styles.cards_card}>
            <Card
              title={'Москва - Корма'}
              description={
                'Отправление из Москвы в 22.00\n' +
                'Автовокзал «Саларьево»\n' +
                'пос. Московский, Киевское шоссе,\n' +
                '23-й км, д. 1, стр. 1 метро «Саларьево» Прибытие в г. Корма в 10.05\n' +
                'ул. Ленина, д.38'
              }
              price={'2500 ₽'}
              img={'https://sveterkom.by/wp-content/uploads/2022/12/15.jpg'}
            />
          </div>

          <div className={styles.cards_card}>
            <Card
              title={'Москва - Мозырь'}
              description={
                'Отправление из Москвы в 22.00\n' +
                'Автовокзал «Саларьево»\n' +
                'пос. Московский, Киевское шоссе,\n' +
                '23-й км, д. 1, стр. 1 метро «Саларьево» Прибытие в Мозырь в 10.00\n' +
                'ул. Советская, 125'
              }
              price={'2500 ₽'}
              img={
                'https://sveterkom.by/wp-content/uploads/2022/01/ba755eb6e56dc568e35f3c8bb2c4e6e4-1.jpg'
              }
            />
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.cards_card}>
            <Card
              title={'Гомель - Москва'}
              description={
                'Отправление от автовокзала «Гомель» (Курчатова, 1) в 19.30, 7 платформа\n' +
                'Прибытие в Москву в 5.40\n' +
                'Автовокзал «Саларьево»'
              }
              price={'80 Br'}
              img={'https://sveterkom.by/wp-content/uploads/2022/01/756.jpg'}
            />
          </div>

          <div className={styles.cards_card}>
            <Card
              title={'Речица - Москва'}
              description={
                'Отправление из Речицы в 18.30\n' +
                'Парковка ресторана "Белый аист"\n' +
                '(Напротив монумента Паровоз)\n' +
                'Прибытие в Москву в 5.40\n' +
                'Автовокзал «Саларьево»'
              }
              price={'80 Br'}
              img={'https://sveterkom.by/wp-content/uploads/2022/01/756.jpg'}
            />
          </div>

          <div className={styles.cards_card}>
            <Card
              title={'Калинковичи - Москва'}
              description={
                'Отправление из г. Калинковичи в 17.15\n' +
                'Парковка Казанского храма\n' +
                'Прибытие в Москву в 5.40\n' +
                'Автовокзал «Саларьево»'
              }
              price={'80 Br'}
              img={'https://sveterkom.by/wp-content/uploads/2022/01/756.jpg'}
            />
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.cards_card}>
            <Card
              title={'Чечерск - Москва'}
              description={
                'Отправление из Чечерска в 18.35\n' +
                'Автовокзал "Чечерск" ул.Советская, 30\n' +
                'Прибытие в Москву в 5.40\n' +
                'Автовокзал «Саларьево»'
              }
              price={'80 Br'}
              img={'https://sveterkom.by/wp-content/uploads/2022/01/756.jpg'}
            />
          </div>

          <div className={styles.cards_card}>
            <Card
              title={'Корма - Москва'}
              description={
                'Отправление из г. Корма в 17.55\n' +
                'Автовокзал "Корма" ул.Ленина, д.38\n' +
                'Прибытие в Москву в 5.40\n' +
                'Автовокзал «Саларьево»'
              }
              price={'80 Br'}
              img={'https://sveterkom.by/wp-content/uploads/2022/01/756.jpg'}
            />
          </div>

          <div className={styles.cards_card}>
            <Card
              title={'Мозырь - Москва'}
              description={
                'Отправление из Мозыря в 17.00\n' +
                'ул. Советская, 125\n' +
                '(напротив магазина "Дары от зари")\n' +
                'Прибытие в Москву в 5.40\n' +
                'Автовокзал «Саларьево»'
              }
              price={'80 Br'}
              img={'https://sveterkom.by/wp-content/uploads/2022/01/756.jpg'}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Timetable
