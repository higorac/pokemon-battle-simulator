import styles from './BattleScreen.module.css'

const BattleScreen = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.battleScreen}></div>
            <div className={styles.decorativeBand}/>
        </div>
    );
};

export default BattleScreen;