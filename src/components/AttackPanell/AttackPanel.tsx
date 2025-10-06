import styles from './AttackPanel.module.css'

const  AttackPanel = () => {
    return (
        <div className={styles.attackPanel}>
            <button className={styles.attackButton}>Attack 1</button>
            <button className={styles.attackButton}>Attack 2</button>
            <button className={styles.attackButton}>Attack 3</button>
            <button className={styles.attackButton}>Attack 4</button>
        </div>
    );
};

export default AttackPanel;
