import React, { Component } from 'react'
import classnames from 'classnames/bind'
import styles from '../Toastr/styles/Toastr.scss'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './styles/animation.css'

const cx = classnames.bind(styles)

export default class Toastr extends Component {
  static propTypes = {
    duration: PropTypes.number,
    position: PropTypes.string,
    className: PropTypes.string,
    render: PropTypes.func,
  }

  static defaultProps = {
    duration: 5000,
    position: 'top-right',
  }

  static childContextTypes = {
    queue: PropTypes.array
  }

  constructor(props) {
    super(props)

    this.state = {
      queue: [],
      // childProps: {}
    }
  }

  getChildContext(){
    return {
      queue: this.state.queue
    }
    debugger
  }

  trigger = childProps => {
    if (this.state.queue.length < 0) return

    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        key: shortid.generate(),
        ...childProps,
      })
    })

    this.setState(prevState => ({
      queue: [...prevState.queue, ...children],
    }))

    // this.setState(prevState => ({
    //   childProps: {...childProps}
    // }))
    // debugger

    const { duration } = this.props
    this.timeID = window.setTimeout(() => {
      this.setState(prevState => ({
        queue: prevState.queue.slice(1),
      }))
    }, duration)
    debugger
  }

  componentWillUnmount() {
    if (!this.timeID) return
    window.clearTimeout(this.timeID)
  }

  render() {
    const { position, className } = this.props
    const {queue} = this.context
    return (
      <div className={cx([position, 'view-page'])}>
        <div className={cx([className])}>
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
      </div>
    )
  }
}
