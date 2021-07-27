import React, { useState } from 'react';

const RadioButton = () => {
    const [gender, setGender] = useState('?');
   
    return (
        <>
        <h2>Circunferencia de la Tierra?</h2>
        <form>
            <label>30.065 km</label>
            <input type="radio" onClick={() => setGender('30')}
                   checked={gender === '30'}
            />
            <label>60.015 km</label>
            <input type="radio" onClick={() => setGender('60')}
                   checked={gender === '60'}
            />
            <label>40.075 km</label>
            <input type="radio" onClick={() => setGender('40')}
                   checked={gender === '40'}
            />
        </form>
       
        {gender === '?' && '?'}
        {gender === '40' && 'Correcto'}
        {gender === '30' && 'Incorrecto'}
        {gender === '60' && 'Incorrecto'} 

        </>
    );
}

export default RadioButton;