import React from 'react';
import styles from './input.styles.pcss';

export default class Input extends React.Component {
    render() {
        return (
            <input
                className={styles.input}
                {...this.props}
            />
        );
    }
}