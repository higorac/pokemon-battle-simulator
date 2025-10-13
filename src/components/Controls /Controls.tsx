import styles from "./Controls.module.css"

const Controls = () => {
    return (
        <div className={styles.controlsContainer}>
            <button className={styles.controlsButtons}>Start</button>
            <button className={styles.controlsButtons}>Restart</button>
        </div>
    );
};

export default Controls;