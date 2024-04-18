import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../images/logo.png';
import Container from '../Container/Container';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Container>
                    <nav className={styles.nav}>
                        <Link to="/">
                            <img src={logo} alt="" /></Link>
                        <a href="#">Личный кабинет</a>
                    </nav>
                </Container>
            </header>
        </>
    );
}
export default Header;