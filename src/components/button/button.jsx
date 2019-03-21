import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.styles.pcss';

export default class Button extends React.Component {
    render() {
        const { value } = this.props;
        const buttonClasses = `${styles.button_authorization} 
        ${styles.button_simple}`;
        return (
            <input
              className={buttonClasses}
              type="submit"
              value={value}
            />
        );
    }
}

Button.propTypes = {
        value: PropTypes.string,
};
Button.defaultProps = {
    value: 'Тык',
};
