import React from 'react';
import './styles/Stairs.scss';

const Stairs = () => (
    <div className='words'>
        <ul className="words__list">
            <li className="words__item">
                <p className='words__item--text'>&nbsp;</p>
                <p className='words__item--text'>N</p>
            </li>
            <li className="words__item">
                <p className='words__item--text'>N</p>
                <p className='words__item--text'>I</p>
            </li>
            <li className="words__item">
                <p className='words__item--text'>I</p>
                <p className='words__item--text'>C</p>
            </li>
            <li className="words__item">
                <p className='words__item--text'>C</p>
                <p className='words__item--text'>E</p>
            </li>
            <li className="words__item">
                <p className='words__item--text'>E</p>
                <p className='words__item--text'>&nbsp;</p>
            </li>
        </ul>
    </div>
)

export default Stairs;
