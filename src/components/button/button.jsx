import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.styles.pcss';

const classNames = require('classnames');

export default class Button extends React.Component {
    render() {
        const { value } = this.props;
        const buttonClasses = classNames(styles.button_simple,
            styles.button_authorization);
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
