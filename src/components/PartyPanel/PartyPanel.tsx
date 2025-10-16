import styles from './PartyPanel.module.css'

type PartyPanelProps = {
    sprite: string
}

const PartyPanel = ({sprite}: PartyPanelProps) => {

    return (
        <button className={styles.partySlot}>
            <img className={styles.sprite} src={sprite} alt='Pokemon Sprite'></img>
        </button>
    );
};

export default PartyPanel