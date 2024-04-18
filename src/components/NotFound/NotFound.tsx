import React from 'react';
import styles from './NotFound.module.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h1>Страница не найдена</h1>
            <Link to="/">Вернуться на главную</Link>
        </div>
    );
};

export default NotFound;