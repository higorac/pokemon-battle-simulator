import styles from './MoveDescription.module.css'

const MoveDescription = () => {
    return (
        <section className={styles.moveDescriptionCard}>
            <h2 className={styles.moveDescriptionTitle}>Descrição do Ataque</h2>
            
            <div className={styles.textContainer}>
                <pre>
                    teste
                </pre>
            </div>
        </section>
    );
};

export default MoveDescription;