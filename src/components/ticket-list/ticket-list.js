import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import Ticket from "../ticket";

import styles from "./ticket-list.module.scss";

export default function TicketList({ tickets = [] }) {
  const memoizedTickets = useMemo(() => {
    return tickets.map((ticket) => ({
      ...ticket,
      id: uuidv4(),
    }));
  }, [tickets]);
  return (
    <ul className={styles["ticket-list"]}>
      {memoizedTickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          carrier={ticket.carrier}
          price={ticket.price}
          segments={ticket.segments}
        />
      ))}
    </ul>
  );
}
