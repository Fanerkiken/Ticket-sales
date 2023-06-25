import React, { useState } from 'react'
import Navigation from '../navigation/Navigation'
import styles from './Faq.module.scss'
import QuestionWithDescription from './QuestionWithDescription'
import Footer from '../footer/Footer'

const Faq = () => {
  return (
    <div className={styles.header}>
      <Navigation />
      <div className={styles.box}>
        <div className={styles.container}>
          <QuestionWithDescription
            question={'Как бронировать билет?'}
            render={() =>
              'Забронировать билет можно по телефонам: в Гомеле +375 29 678 43 03, +375 29 768 43 03;\n' +
              '              в Москве: +7 495 146 42 02. Более подробную информацию уточняйте у наших операторов.'
            }
          />
          <QuestionWithDescription
            question={'Где можно приобрести билет по направлению Гомель-Москва?'}
            render={() =>
              'г.Гомель, пл. Привокзальная, 1 гостиница Гомель, 7 этаж, офис, 723, на автовокзале ' +
              'Гомель (г.Гомель ул.Курчатова, 1) в любой кассе с паспортом (расчет производится в ' +
              'бел. рублях).'
            }
          />

          <QuestionWithDescription
            question={'Где можно приобрести билет по направлению Москва-Гомель?'}
            render={() => (
              <ul>
                <li>
                  Автовокзал «Саларьево» г. Москва, пос. Московский, Киевское шоссе, 23-й км, д. 1,
                  стр. 1 метро «Саларьево» в любой кассе (расчет производится в рос. рублях);
                </li>
                <li>Автовокзале «Центральный» (г. Москва, Щелковское шоссе 75);</li>
                <li>
                  Автовокзал «Варшавская» (г. Москва, Каширский пр-д, д.19 (ст. метро «Варшавская»);
                </li>
                <li>Автовокзал «Орехово» (г. Москва, Шипиловский пр-д, 12);</li>
                <li>
                  Автовокзал «Северные Ворота» (г. Москва, ул. Дыбенко, д. 7, стр. 1. (ст. метро
                  «Ховрино»);
                </li>
                <li>
                  Автовокзал «Южные Ворота» (г. Москва, МКАД, 19-й км, стр. 1, вл. 20 (на территории
                  ТК «Южные Ворота»));
                </li>
                <li>
                  в офисе г.Гомель, пл.Привокзальная, 1, гостиница «Гомель», 7 этаж, офис 723, с
                  паспортом (расчет производится в бел. рублях).
                </li>
              </ul>
            )}
          />
          <QuestionWithDescription
            question={' Осуществляется ли покупка билета через интернет?'}
            render={() => (
              <div className={styles.containerToDescriptionWithLinks}>
                <div className={styles.IsItPossibleToBuyATicketOnline}>
                  <span>Да. Направление Гомель-Москва</span>
                  <div className={styles.IsItPossibleToBuyATicketOnline_links}>
                    <a href="https://www.blablacar.ru/">https://www.blablacar.ru/</a>
                    <a href="www.ticketbus.by">www.ticketbus.by</a>
                    <a href="www.busfor.by">www.busfor.by</a>
                    <a href="https://travel.yandex.ru/buses/">https://travel.yandex.ru/buses/</a>
                    <a href="https://www.tutu.ru/">https://www.tutu.ru/</a>
                    <a href="https://unitiki.com/">https://unitiki.com/</a>
                    <a href="https://avtovokzal.gomel.by/">https://avtovokzal.gomel.by/</a>
                  </div>
                  <div className={styles.IsItPossibleToBuyATicketOnline}>
                    <span>Направление Москва-Гомель</span>
                    <div className={styles.IsItPossibleToBuyATicketOnline_links}>
                      <a href="https://e-traffic.ru/frames/home/index/3Gahfm4a">
                        https://e-traffic.ru/frames/home/index/3Gahfm4a
                      </a>
                      <a href="https://www.blablacar.ru/">https://www.blablacar.ru/</a>
                      <a href="www.busfor.by">www.busfor.by</a>
                      <a href="https://travel.yandex.ru/buses/">https://travel.yandex.ru/buses/</a>
                      <a href="https://www.tutu.ru/">https://www.tutu.ru/</a>
                      <a href="https://unitiki.com/">https://unitiki.com/</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
          <QuestionWithDescription
            question={'Выдаете ли проездные документы(чеки)?'}
            render={() =>
              'Да. Билет утвержденного образца Министерства транспорта и коммуникаций РБ.'
            }
          />
          <QuestionWithDescription
            question={' Возможно ли вернуть билет?'}
            render={() =>
              '  Возможно, НЕ позднее чем за 2 часа до отправления автобуса. Стоимость возвращается за\n' +
              '              вычетом предусмотренного сбора за предварительную продажу билета. При возврате билета\n' +
              '              позднее чем за 2 часа до отправления, а также после отправления автобуса в рейс,\n' +
              '              денежные средства за неиспользованную поездку не возвращаются!'
            }
          />
          <QuestionWithDescription
            question={'Можно ли поменять дату отправления?'}
            render={() =>
              'Да, можно при наличии мест на предполагаемый рейс, не позднее, чем за 24 часа до\n' +
              '              отправления.'
            }
          />
          <QuestionWithDescription
            question={'Действует ли скидка на детский билет?'}
            render={() => 'Да, действует 50 % скидка.'}
          />
          <QuestionWithDescription
            question={' Можно ли ехать без паспорта?'}
            render={() =>
              'Нет. Паспорт — это документ, удостоверяющий Вашу личность. Пересечение границы РФ\n' +
              '              только при наличии паспорта. Вид на жительство, документом для пересечения границы не\n' +
              '              является!!!'
            }
          />
          <QuestionWithDescription
            question={'Предусмотрены ли во время движения санитарные остановки?'}
            render={() =>
              'Да. По пути следования автобус делает 3 санитарные остановки по 15-20 минут, на\n' +
              '              заправочных станциях , через каждые 2-3 часа.'
            }
          />
          <QuestionWithDescription
            question={'Допускается ли пассажир в алкогольном либо наркотическом опьянении?'}
            render={() =>
              'Строго запрещено. Пассажиры в состоянии алкогольного либо наркотического опьянения к\n' +
              '              рейсу не допускаются.'
            }
          />
          <QuestionWithDescription
            question={'Возможен ли провоз домашних животных?'}
            render={() =>
              ' Возможен, но в клетках/переносках с глухим дном. Эта услуга предоставляется бесплатно.'
            }
          />
          <QuestionWithDescription
            question={
              'Сколько по времени занимает путь и какое расстояние Гомель-Москва и обратно?'
            }
            render={() =>
              '10 часов 10 минут, 620 км. Транспортная Компания не несет ответственности за изменение\n' +
              '              времени прибытия в связи с пробками на дорогах, плохими погодными условиями,\n' +
              '              действиями представителей власти и другими не зависящими от нас причинами.'
            }
          />
          <QuestionWithDescription
            question={'Возите ли Вы в аэропорт?'}
            render={() =>
              'Мы завозим в аэропорт Внуково бесплатно, остальные аэропорты Москвы за дополнительную\n' +
              '              плату.'
            }
          />
          <QuestionWithDescription
            question={'Какая информация необходима для оформления билета?'}
            render={() => (
              <div>
                <span>Для оформления проезда нам необходима информация по каждому пассажиру:</span>
                <li>ФИО полностью;</li>
                <li>Дата рождения;</li>
                <li>Гражданство;</li>
                <li>Серия и номер паспорта;</li>
                <li>Контактные данные пассажира, контактный номер телефона;</li>
              </div>
            )}
          />
          <QuestionWithDescription
            question={'На каком автобусе осуществляется перевозка?'}
            render={() =>
              'Проезд производится на комфортабельных туристических автобусах, предназначенных для\n' +
              '              международных перевозок. Автобусы соответствуют европейскому классу и обеспечивают\n' +
              '              комфортный проезд пассажирам.'
            }
          />
          <QuestionWithDescription
            question={
              'Указано что «провоз багажа входит в стоимость билета». Сколько конкретно багажа можно\n' +
              '          взять с собой?'
            }
            render={() =>
              'Для наших пассажиров действует рекомендуемое значение массы и объема багажа: сумма\n' +
              '              трех измерений должны быть не более 180 см или масса не более 20 кг на человека. Если\n' +
              '              Ваш багаж больше, пожалуйста, обратитесь к нашим операторам call-центра, мы всегда\n' +
              '              идем навстречу пассажирам, но при условии технической возможности автобуса и\n' +
              '              количества пассажиров. В случае превышения нормы багажа, перевозчик вправе отказать\n' +
              '              пассажиру в перевозке (Постановление Совета Министров РБ 30.06.2008 №972 (в редакции\n' +
              '              постановления Совета Министров РБ 31.08.2018 №636)). ВНИМАНИЕ! Погрузка/разгрузка\n' +
              '              багажа в грузовой отсек осуществляется пассажирами самостоятельно, водитель лишь\n' +
              '              осуществляет контроль.'
            }
          />
          <QuestionWithDescription
            question={'Нужен ли тест ПЦР при пересечении границы?'}
            render={() =>
              'Тест ПЦР на сухопутных пограничных пунктах РФ не проверяется Роспотребнадзором'
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Faq
