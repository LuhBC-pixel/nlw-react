import { signIn } from 'next-auth/client';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/pages/Login.module.css';

export default function Login() {
    return (
        <div className={styles.home}>
            <Head>
                <title>Sign in | moveit</title>
            </Head>
            <div className={styles.container}>
                <img src="./logo-full.svg" alt="logo moveit"/>
                <strong>Bem-vindo</strong>
                <p>
                    <img src="./icons/Github.svg" alt="github logo"/> &nbsp;
                    Faça login com seu Github para começar
                </p>
                <div className={styles.section}>
                    <input type="text" placeholder="Digite seu username"/>
                    <button 
                        type="button"
                        onClick={() => signIn('github')}
                    >
                        <img src="/icons/Vector.svg" alt=""/>
                    </button>
                </div>
            </div>
        </div>
    )
}