import styles from './ticket-list.module.scss';
import React, { useMemo } from 'react';
import Ticket from '../ticket';
import CryptoJS from 'crypto-js';

// Функция для генерации хэша из данных билета
const generateTicketHash = (ticket) => {
	const dataString = `${ticket.price}-${ticket.carrier}-${ticket.segments
		.map((segment) => segment.stops)
		.join('-')}`;
	return CryptoJS.MD5(dataString).toString();
};

export default function TicketList({ tickets = [] }) {

    const ticketsWithHashes = useMemo(() => {
			return tickets.slice(0, 5).map((ticket) => ({
				...ticket,
				hash: generateTicketHash(ticket),
			}));
		}, [tickets]);

	return (
		<ul className={styles['ticket-list']}>
			{ticketsWithHashes.map((ticket) => (
				<Ticket
                    key={ticket.hash}
                    id={ticket.hash}
                    {...ticket}
				/>
			))}
		</ul>
	);
}
