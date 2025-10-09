import styles from './AttackPanel.module.css'

const  AttackPanel = () => {
    return (
        <div className={styles.attackPanel}>
            <button className={styles.attackButton}>Tempestade de Folhas</button>
            <button className={styles.attackButton}>Soco de Gelo</button>
            <button className={styles.attackButton}>Explosion</button>
            <button className={styles.attackButton}>Absorb</button>
        </div>
    );
};

export default AttackPanel;
