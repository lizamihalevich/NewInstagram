import React from 'react';
import styles from './page.styles.pcss';
import Header from '../header';

export default class Page extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className={styles.page_wrapper}>Page content</div>
            </>
        );
    }
}
