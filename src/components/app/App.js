import styles from './app.module.scss';
import Header from '../header';
import Filter from '../filter';
import SortTabs from '../sort-tabs/sort-tabs';
import TicketList from '../ticket-list';
import Button from '../button';
import mockTickets from '../../mockData/tickets';
import { Provider } from 'react-redux';
import store from '../../redux/store';

function App() {
	//? В SortTabs передавать функции-компараторы для сортировки,
	//? массив билетов передавать в TicketList, вложенный в SortTabs
  //? Кнопка "Показать еще 5 билетов" должна быть на верхнем уровне

	return (
		<Provider store={store}>
			<div className={styles.app}>
				<Header />
				<div className={styles.container + ' ' + styles.layout}>
					<Filter />
					<SortTabs />
					<TicketList tickets={mockTickets} />
					<Button />
				</div>
			</div>
		</Provider>
	);
}

export default App;
