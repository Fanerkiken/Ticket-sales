import React, { useState } from 'react';
import styles from './CityList.module.scss'

const citiesWithoutMoscow = [
    'Гомель',
    'Речица',
    'Калинковичи',
    'Мозырь',
    'Корма',
    'Чечерск'
];

const citiesWithMoscow = ['Москва', ...citiesWithoutMoscow];

const CityList = ( {register} ) => {
    const [selectedCityFrom, setSelectedCityFrom] = useState('');
    const [selectedCityTo, setSelectedCityTo] = useState('Москва');

    const handleCityFromChange = (event) => {
        const { value } = event.target;
        setSelectedCityFrom(value);
        setSelectedCityTo(value === 'Москва' ? '' : 'Москва');
    };

    const handleCityToChange = (event) => {
        const { value } = event.target;
        setSelectedCityTo(value);
    };

    return (
        <>
            <label>
                Откуда:
                <select id="cityFrom" {...register('cityFrom')} name={'cityFrom'} value={selectedCityFrom} onChange={handleCityFromChange}>
                    <option value="">Выберите город</option>
                    {citiesWithMoscow.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
            </label>
            <label>
                Куда:
                <select id="cityTo" {...register('cityTo')} name={'cityTo'} value={selectedCityTo} disabled={!selectedCityFrom} onChange={handleCityToChange}>
                    {selectedCityFrom === 'Москва' ? citiesWithoutMoscow.map(city => <option key={city} value={city}>{city}</option>) : <option value="Москва">Москва</option>}
                </select>
            </label>
        </>
    );
};

export default CityList;
