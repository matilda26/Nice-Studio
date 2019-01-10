import React from 'react';
import './styles/CutOut.scss';

const CutOut = () => (
    <div className='cutout'>
        <p aria-label='Nice' className='cutout__wrapper'>
            <span className='cutout__item' data-text='N'>N</span>
            <span className='cutout__item' data-text='I'>I</span>
            <span className='cutout__item' data-text='C'>C</span>
            <span className='cutout__item' data-text='E'>E</span>
        </p>
    </div>
)

export default CutOut;
