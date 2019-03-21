import React from 'react';
import Input from 'components/input';
import Button from 'components/button/button';
import styles from './authorization.styles.pcss';

export default class Authorization extends React.Component {
    render() {
        return (
            <div className={styles.authorization_wrapper}>
                <div className={styles.center}>
                    <Input placeholder="Email:" />
                </div>
                <div className={styles.center}>
                    <Input placeholder="Password:" />
                </div>
                <div className={styles.center}>
                    <Button value="Sign In" />
                </div>
            </div>
        );
    }
}
