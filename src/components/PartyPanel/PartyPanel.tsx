import styles from './PartyPanel.module.css'

type PartyPanelProps = {
    sprite: string
    name: string
}

const PartyPanel = ({sprite, name}: PartyPanelProps) => {

    return (
        <button className={styles.partySlot}>
            <img className={styles.sprite} src={sprite} alt={name}></img>
        </button>
    );
};

export default PartyPanel