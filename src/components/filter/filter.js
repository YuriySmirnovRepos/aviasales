import styles from './filter.module.scss';

const filters = [
    {text: 'Все'},
    {text: 'Без пересадок'},
    {text: '1 пересадка'},
    {text: '2 пересадки'},
    {text: '3 пересадки'},
];

export default function Filter() {
    return (
        <div className={styles.filterBox}>
            <h2 className={styles.title}>количество пересадок</h2>
            <ul className={styles.list}>
                {filters.map(({text}) => (
                    <li className={styles.item} key={text}>
                        <label className={styles.label}>
                            <input type="checkbox" className={styles.checkbox} />
                            {text}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
