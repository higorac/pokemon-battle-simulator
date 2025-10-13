import styles from './PartyPanel.module.css'

const PartyPanel = () => {

    return (
        <button className={styles.partySlot}>
            <img className={styles.sprite}></img>
        </button>
    );
};

export default PartyPanel