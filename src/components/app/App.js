import styles from './App.module.scss';
import Header from '../header';
import Filter from '../filter';
import SortTabs from '../sort-tabs/sort-tabs';
import TicketList from '../ticket-list';
import Button from '../button';
import mockTickets from '../../mockData/tickets';

function App() {
//? В SortTabs передавать функции-компараторы для сортировки,
//? массив билетов передавать в TicketList, вложенный в SortTabs
//? Кнопка "Показать еще 5 билетов" должна быть на верхнем уровне
console.log(mockTickets);
  return (
    <div className={styles.app}>
        <Header />
        <div className={styles.container + ' ' + styles.layout}>
          <Filter />
          <SortTabs />
          <TicketList tickets={mockTickets} />
          <Button />
        </div>
    </div>
  );
}

export default App;
