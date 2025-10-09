import styles from './MoveDescription.module.css'

const MoveDescription = () => {
    return (
        <section className={styles.moveDescriptionCard}>
            <h2 className={styles.moveDescriptionTitle}>Descrição do Ataque</h2>
            
            <div className={styles.textContainer}>
                <pre>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, quae. Saepe alias fugit natus pariatur facilis. Quae modi veritatis asperiores nobis, ab obcaecati recusandae quidem distinctio repellat quas vitae ex.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quod rerum animi saepe officiis necessitatibus corporis libero atque ab ut doloribus laboriosam aperiam vitae fugit, dolores deserunt nostrum adipisci praesentium?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, placeat! Tempore, facere obcaecati. Hic mollitia magni quos et blanditiis molestiae incidunt quisquam, voluptatibus ipsam in quasi exercitationem error totam. Provident?
                </pre>
            </div>
        </section>
    );
};

export default MoveDescription;