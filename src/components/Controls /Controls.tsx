import styles from "./Controls.module.css"

interface ControlsProp {
    onRestart: () => void 
}

const Controls = ({onRestart}: ControlsProp) => {
    return (
        <div className={styles.controlsContainer}>
            <button className={styles.controlsButtons}>Start</button>
            <button className={styles.controlsButtons} onClick={onRestart}>Restart</button>
        </div>
    );
};

export default Controls;