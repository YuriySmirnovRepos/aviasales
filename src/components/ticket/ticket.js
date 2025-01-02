import React from "react";
import { v4 as uuidv4 } from "uuid";

import TicketSegment from "../ticket-segment/ticket-segment";

import styles from "./ticket.module.scss";

export default function Ticket({id, price, carrier, segments }) {
  const carrierPicSrc = `//pics.avs.io/99/36/${carrier}.png`;
  return (
    <li key={id} className={styles.ticket}>
      <div className={styles.ticket__header}>
        <span className={styles.ticket__price}>
          {price.toLocaleString("ru-RU")} Р
        </span>
        <img
          src={carrierPicSrc}
          alt="carrier"
          className={styles.ticket__carrier}
        />
      </div>
      <ul className={styles.ticket__segments}>
        {segments.map((segment) => (
          <TicketSegment
            key={uuidv4()}
            origin={segment.origin}
            destination={segment.destination}
            date={segment.date}
            stops={segment.stops}
            duration={segment.duration}
          />
        ))}
      </ul>
    </li>
  );
}
