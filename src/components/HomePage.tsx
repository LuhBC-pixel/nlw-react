import styles from '../styles/components/HomePage.module.css';

export function HomePage() {
    return (
        <div className={styles.container}>
            <img src="./logo-full.svg" alt="logo moveit"/>

            <section className={styles.section}>
                <h1>Bem-vindo</h1>
                <p>
                    <img src="./icons/Github.svg" alt="github logo"/> &nbsp;
                    Faça login com seu Github para começar
                </p>
                <input type="text" placeholder="Digite seu username"/>
                <button type="button" className={styles.button}>
                    <img src="./icons/button.svg" alt="submit"/>
                </button>
            </section>
        </div>
    )
}