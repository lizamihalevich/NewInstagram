import React from 'react';
import Input from 'components/input';
import Button from 'components/button/button';
import { Link } from 'react-router-dom';
import styles from './registration.styles.pcss';

export default class Registration extends React.Component {
  render() {
    return (
        <div className={styles.authorization_wrapper}>
            <div className={styles.center}>
                <Input />
            </div>
            <div className={styles.center}>
                <Input />
            </div>
            <div className={styles.center}>
                <Input />
            </div>
            <div className={styles.center}>
                <Input />
            </div>
            <div className={styles.center}>
                <Button value="Log In" />
            </div>
            <div className={styles.center}>
                <Link to="/">Back</Link>
            </div>
        </div>
    );
  }
}
