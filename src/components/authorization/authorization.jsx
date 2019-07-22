import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Input from '../common/input';
import styles from './authorization.styles.pcss';


export default class Authorization extends React.Component {
    render() {
        const linkClasses = classNames(styles.button_simple, styles.button_link_style);
        return (
            <div className={styles.authorization_wrapper}>
                <div className={styles.center}>
                    <Input placeholder="Email:" type="email" />
                </div>
                <div className={styles.center}>
                    <Input placeholder="Password:" type="password" />
                </div>
                <div className={styles.center}>
                    <Link to="/page" className={linkClasses}>Sign In</Link>
                </div>
                <div className={styles.center}>
                    <Link to="/login" className={styles.link_style}>Log In</Link>
                </div>
            </div>
        );
    }
}
