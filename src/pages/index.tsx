import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FiArrowRight, FiGithub } from 'react-icons/fi';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
    const { push } = useRouter();

    const [username, setUsername] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        push(`/${username}`);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Login | Move.it</title>
            </Head>

            <section>
                <div>
                    <img src="/logo_white.svg" alt="" />

                    <h2>Bem-vindo</h2>

                    <div className={styles.home}>
                        <FiGithub size={24} color="#fff" />
                        <p>Insira o seu usuário do GitHub para começar</p>
                    </div>

                    <div className={styles.home}>
                        <input
                            type="text"
                            placeholder="Digite seu Github"
                            onChange={e => setUsername(e.target.value)}
                        />
                        <button type="button" onClick={handleSubmit}>
                            <FiArrowRight size={24} color="#fff" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
