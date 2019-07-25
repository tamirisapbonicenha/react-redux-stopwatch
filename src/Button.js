import React from 'react';
import styles from './Button.module.css';

const Button = props => {
    return (
        <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={props.handleClick()}>{props.text}</button>
    )
}

export default Button