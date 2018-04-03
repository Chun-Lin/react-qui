import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rem } from 'polished'

const CheckboxGroup = ({ children, direction, span }) => {
  const StyledCheckboxGroup = styled.div`
    /* CheckboxGroup Direction */
    display: flex;
    flex-flow: ${direction === 'column' || direction === 'col'
        ? 'column'
        : null}
      wrap;

    /* Gap between checkboxes  */
    > * {
      margin-bottom: ${rem(
        direction === 'column' || direction === 'col' ? span : 0,
      )};
      margin-right: ${rem(direction === 'row' ? span : 0)};
    }
  `

  return <StyledCheckboxGroup>{children}</StyledCheckboxGroup>
}

CheckboxGroup.propTypes = {
  /** Checkbox checked or not */
  checked: PropTypes.bool,
  /** Checkbox disabled or not */
  disabled: PropTypes.bool,
  /** The margin pixels between Checkboxes  */
  span: PropTypes.number,
  /** The theme of Checkbox */
  theme: PropTypes.string,
  /** The driection of Checkboxes. Can be Row or Column */
  direction: PropTypes.string,
  /** Add addition className for Checkbox element */
  className: PropTypes.string,
  /** Options for checkboxGroup */
  options: PropTypes.array,
}

CheckboxGroup.defaultProps = {
  checked: false,
  disabled: false,
  theme: 'light',
  direction: 'col',
  span: 30,
}

export default CheckboxGroup
