import React, { PureComponent } from 'react'
import classnames from 'classnames/bind'
import styles from './Button.scss'
import PropTypes from 'prop-types'

const cx = classnames.bind(styles)

export default class Button extends PureComponent {
  static propTypes = {
    /** Theme is used for setting button theme */
    theme: PropTypes.oneOf(['light', 'dark']),
    /** Shape is used for setting button shape. square button is for confirmation, and rounded button is for general purpose in context. */
    shape: PropTypes.oneOf(['square', 'rounded']),
    /** Add addition className for button element */
    className: PropTypes.string,
    /** Content of the button. Can be a string, number, or a react component.  */
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element,
    ]),
    /** State of the button. Make button to be in disable state */
    disabled: PropTypes.string,
  }

  static defaultProps = {
    theme: 'light',
    shape: 'square',
    disabled: '',
  }

  render() {
    const { shape, theme, className, disabled, children } = this.props

    return (
      <button
        disabled={disabled}
        className={cx(['qbtn', shape, theme, className])}
      >
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  shape: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  disabled: PropTypes.string,
}
