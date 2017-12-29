import React, { Component } from 'react'
import classnames from 'classnames/bind'
import styles from '../Toastr/styles/ToastrContainer.scss'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './styles/animation.css'

const cx = classnames.bind(styles)

export default class ToastrContainer extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    duration: PropTypes.number,
    position: PropTypes.string,
    className: PropTypes.string,
    render: PropTypes.func,
    toastrStyle: PropTypes.oneOf([
      'qts',
      'photo-st',
      'music-st',
      'file-st',
      'download-st',
      'video-st',
    ]),
  }

  static defaultProps = {
    duration: 5000,
    position: 'top-right',
    toastrStyle: 'qts',
  }

  constructor(props) {
    super(props)

    this.state = {
      queue: [],
    }
  }

  trigger = childProps => {
    if (this.state.queue.length < 0) return

    const { width, height, duration, toastrStyle } = this.props
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        width,
        height,
        toastrStyle,
        key: shortid.generate(),
        ...childProps,
      })
    })

    this.setState(prevState => ({
      queue: [...prevState.queue, ...children],
    }))

    this.id = window.setTimeout(() => {
      this.setState(prevState => ({
        queue: prevState.queue.slice(1),
      }))
    }, duration)
  }

  componentWillUnmount() {
    if (!this.id) return
    clearTimeout(this.id)
  }

  render() {
    const { position, className } = this.props

    return (
      <div className={cx([position, className])}>
        <div>
          <ReactCSSTransitionGroup
            transitionName="toastranimation"
            transitionEnterTimeout={0.1}
            transitionLeaveTimeout={2000}
          >
            {this.state.queue}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}
