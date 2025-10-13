import styles from './BattleScreen.module.css'

type BattleScreenProps = {
    children?: React.ReactNode;
}

const BattleScreen = ({ children }: BattleScreenProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.battleScreen}>
                {children}
            </div>
            <div className={styles.decorativeBand}/>
        </div>
    );
};

export default BattleScreen;