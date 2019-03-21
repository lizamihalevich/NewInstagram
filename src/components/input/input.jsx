import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.styles.pcss';

export default class Input extends React.Component {
    render() {
        const { placeholder } = this.props;
        return (
            <input
              className={styles.input_simple}
              placeholder={placeholder}
            />
        );
    }
}

Input.propTypes = {
    placeholder: PropTypes.string,
};
Input.defaultProps = {
    placeholder: 'Enter info:',
};
