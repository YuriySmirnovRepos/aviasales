import React from 'react';
import styles from './segment.module.scss';

export default function Segment({ origin, destination, date, duration, stops }) {
    return (
        <li className={styles['ticket-segment']}>
            <span className={styles['ticket-segment__origin']}>
                {origin} - {destination}
            </span>
            <span className={styles['ticket-segment__duration-title']}>в пути</span>
            <span className={styles['ticket-segment__duration']}>
                {duration} ч
            </span>
            <span className={styles['ticket-segment__stops']}>
                {stops} пересадки
            </span>
            <span className={styles['ticket-segment__date']}>
                {date}
            </span>
        </li>
    );
}