import styles from'./sort-tabs.module.scss'
export default function SortTabs() {
    return (
        <div className={styles['sort-tabs']}>
            <input type="radio" name="sort" id="cheap" className={styles['sort-tabs__button']} />
            <label htmlFor="cheap">Самый дешевый</label>
            <input type="radio" name="sort" id="fast" className={styles['sort-tabs__button']} />
            <label htmlFor="fast">Самый быстрый</label>
            <input type="radio" name="sort" id="opt" className={styles['sort-tabs__button']} />
            <label htmlFor="opt">Оптимальный</label>
        </div>
    );
}