import React, { useEffect } from 'react';
import styles from './app.module.scss';
import Header from '../header';
import Filter from '../filter';
import SortTabs from '../sort-tabs/sort-tabs';
import TicketList from '../ticket-list';
import Loader from '../loader';
import Button from '../button';
import Message from '../message';
// import mockTickets from '../../mockData/tickets';
import {
	useGetSearchIdQuery,
	useLazyGetTicketsQuery,
} from '../../services/aviasalesApi';

function App() {

	// const isLoading = false;
	// const error = new Error('Error message');
	// const ticketsData = { tickets: [] };

	const { data: searchIdData, error: getSearchIdError, isLoading: isSearchIdLoading } = useGetSearchIdQuery();
	const [
		triggerGetTickets,
		{ data: ticketsData, error: getTicketsError, isLoading: isTicketsLoading },
	] = useLazyGetTicketsQuery(searchIdData);

    useEffect(() => {
			if (searchIdData?.searchId) {
				triggerGetTickets(searchIdData.searchId);
			}
	}, [searchIdData]);
	
	const isLoading = isSearchIdLoading || isTicketsLoading;
	const error = getSearchIdError || getTicketsError;

	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.container + ' ' + styles.layout}>
				<Filter />
				<SortTabs />
				{isLoading ? (
					<Loader />
				) : error ? (
					<Message type='error' message={ error.message } />
					) : ticketsData?.tickets.length === 0 ? (
					<Message type='info' message='Билетов не найдено' />
						) : (
							<>
								<TicketList tickets={ticketsData?.tickets} />
								<Button />
							</>
				)}
			</div>
		</div>
	);
}

export default App;
