import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.headline}>TREKdex</h1> 
      <Link to={'/'} className={styles.link}>Home</Link>
      <Link to={'/create'} className={styles.link}>add character</Link>
    </div>
  );
}
