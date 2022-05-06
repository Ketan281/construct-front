import styles from "./LoadingIndicator.module.css";
import React from "react";
// Source => https://tobiasahlin.com/spinkit/
const LoadingIndicator = () => {
    return (
        <div className={styles.skChase}>
            <div className={styles.skChaseDot}></div>
            <div className={styles.skChaseDot}></div>
            <div className={styles.skChaseDot}></div>
            <div className={styles.skChaseDot}></div>
            <div className={styles.skChaseDot}></div>
            <div className={styles.skChaseDot}></div>
        </div>
    )
};

export default LoadingIndicator;