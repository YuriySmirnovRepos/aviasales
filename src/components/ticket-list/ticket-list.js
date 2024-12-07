import styles from './ticket-list.module.scss';
import React from 'react';
import Ticket from '../ticket';

export default React.memo(function TicketList({tickets = []}) {
    return (
        <ul className={styles['ticket-list']}>
            {tickets.map(ticket => (
                <Ticket
                    key={ticket.id}
                    id={ticket.id}
                    price={ticket.price}
                    carrier={ticket.carrier}
                    segments={ticket.segments}
                />
            ))}
        </ul>
    );
}, (prev, next) => prev.tickets.length === next.tickets.length && prev.tickets.every((ticket, index) => (
    ticket.id === next.tickets[index].id &&
    ticket.price === next.tickets[index].price &&
    ticket.carrier === next.tickets[index].carrier &&
    ticket.segments.length === next.tickets[index].segments.length &&
    ticket.segments.every((segment, index) => (
        segment.origin === next.tickets[index].segments.origin &&
        segment.destination === next.tickets[index].segments.destination &&
        segment.date === next.tickets[index].segments.date &&
        segment.stops === next.tickets[index].segments.stops &&
        segment.duration === next.tickets[index].segments.duration
    ))
)));
