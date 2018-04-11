import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rem, padding } from 'polished'
import { BLACK, DARKGRAY, LIGHTGRAY } from './colors'

const StyledTextarea = styled.textarea`
  ${padding(rem('10px'))};
  box-sizing: border-box;
  outline: none;
  border: ${rem('1px')} solid ${DARKGRAY};
  min-height: ${rem('24px')};
  height: ${props => (props.height ? rem(`${props.height}px`) : rem('200px'))};
  width: ${props => (props.width ? rem(`${props.width}px`) : rem('300px'))};
  font-size: ${rem('12px')};
  color: ${BLACK};
  border: ${rem('1px')} solid ${BLACK};
  caret-color: ${BLACK};
  resize: none;

  &::placeholder {
    color: transparent;
    background: transparent;
  }

  &:disabled {
    border: ${rem('1px')} solid ${LIGHTGRAY};
    color: ${LIGHTGRAY};
    cursor: not-allowed;
  }

  &::placeholder {
    color: #aeaeae;
  }
`

const noop = () => {}

const Textarea = ({
  className,
  type,
  onChange = noop,
  placeholder,
  value,
  id,
  disabled,
  height,
  width,
  ...restProps
}) => {
  console.log(height)
  return (
    <StyledTextarea
      className={className}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      height={height}
      width={width}
      {...restProps}
    />
  )
}

Textarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
}

Textarea.defaultProps = {
  value: '',
  disabled: false,
  placeholder: '',
}

export default Textarea
