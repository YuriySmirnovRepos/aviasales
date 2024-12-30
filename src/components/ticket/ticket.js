import styles from './ticket.module.scss';
import React from 'react';
import Segment from '../segment/segment';

import carrierPic from '../../assets/carriers/s7.svg';

export default function Ticket({ id, price, carrier, segments }) {
    return (
        <li key={id} className={styles['ticket']}>
            <div className={styles['ticket__header']}>
                <span className={styles['ticket__price']}>{price} Р</span>
                <img src={carrierPic} alt="carrier" className={styles['ticket__carrier']} />
            </div>
            <ul className={styles['ticket__segments']}>
                {segments.map((segment, index) => (
                    <Segment key={index} {...segment} />
                ))}
            </ul>
        </li>
    );
}
