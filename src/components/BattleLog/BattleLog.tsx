import styles from './BattleLog.module.css'

const BattleLog = () => {
    return (
        <section className={styles.battleLog}>
            <h2 className={styles.battleLogTitle}>Battle Log</h2>
            <div className={styles.chat}></div>
        </section>
    );
};

export default BattleLog;