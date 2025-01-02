import React, { useEffect } from "react";

import Header from "../header";
import Filter from "../filter";
import SortTabs from "../sort-tabs/sort-tabs";
import TicketList from "../ticket-list";
import Loader from "../loader";
import Button from "../button";
import Message from "../message";
// import mockTickets from '../../mockData/tickets';
import {
  useGetSearchIdQuery,
  useLazyGetTicketsQuery,
} from "../../services/aviasalesApi";

import styles from "./app.module.scss";

function App() {
  // const isLoading = false;
  // const error = new Error('Error message');
  // const ticketsData = { tickets: [] };

  const { data: searchIdData, error: getSearchIdError } = useGetSearchIdQuery();

  const [
    triggerGetTickets,
    { data: ticketsData, error: getTicketsError, isLoading: isTicketsLoading },
  ] = useLazyGetTicketsQuery(searchIdData);

  useEffect(() => {
    if (searchIdData?.searchId) {
      triggerGetTickets(searchIdData.searchId);
    }
  }, [searchIdData, triggerGetTickets]);

  const error = getSearchIdError || getTicketsError;

  const renderTicketsListOrMessage = () => {
    if (isTicketsLoading) return <Loader />;
    if (error)
      return <Message type="error" message="Ошибка" errorCode={error.status} />;
    if (ticketsData?.tickets) {
      return (
        <>
          <TicketList tickets={ticketsData.tickets.slice(0, 5)} />
          <Button />
        </>
      );
    }
    if (ticketsData?.tickets.length === 0) {
      return <Message type="info" message="Ничего не найдено" />;
    }
    return null;
  };

  return (
    <div className={styles.app}>
      <Header />
      <div className={`${styles.container} ${styles.layout}`}>
        <Filter />
        <SortTabs />
        {renderTicketsListOrMessage()}
      </div>
    </div>
  );
}

export default App;
