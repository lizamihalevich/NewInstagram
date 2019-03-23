import React from 'react';
import Input from 'components/input';
import Button from 'components/button/button';
import { Link } from 'react-router-dom';
import styles from './authorization.styles.pcss';

export default class Authorization extends React.Component {
    render() {
        return (
            <div className={styles.authorization_wrapper}>
                <div className={styles.center}>
                    <Input placeholder="Email:" type="email" />
                </div>
                <div className={styles.center}>
                    <Input placeholder="Password:" type="password" />
                </div>
                <div className={styles.center}>
                    <Button value="Sign In" />
                </div>
                <div className={styles.center}>
                    <Link to="/login">Log In</Link>
                </div>
            </div>
        );
    }
}
