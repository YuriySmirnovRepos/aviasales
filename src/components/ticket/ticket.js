import styles from './ticket.module.scss';
import carrierPic from '../../assets/carrier-s7.svg';

export default function Ticket({ id, price, carrier, segments }) {
    return (
        <li key={id} className={styles['ticket']}>
            <div className={styles['ticket__header']}>
                <span className={styles['ticket__price']}>{price} Р</span>
                <img src={carrierPic} alt="carrier" className={styles['ticket__carrier']} />
            </div>
            <ul className={styles['ticket__segments']}>
                {segments.map((segment, index) => (
                    <li key={index} className={styles['ticket-segment']}>
                        <span className={styles['ticket-segment__origin']}>
                            {segment.origin} - {segment.destination}
                        </span>
                        <span className={styles['ticket-segment__duration-title']}>в пути</span>
                        <span className={styles['ticket-segment__duration']}>
                            {segment.duration} ч
                        </span>
                        <span className={styles['ticket-segment__stops']}>
                            {segment.stops} пересадки
                        </span>
                        <span className={styles['ticket-segment__date']}>
                            {segment.date}
                        </span>
                    </li>
                ))}
            </ul>
        </li>
    );
}
