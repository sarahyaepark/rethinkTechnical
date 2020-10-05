import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route} from 'react-router-dom'
import {SearchData, ShortUrl} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/searchData" component={SearchData} />
        <Route path="/shortenUrl" component={ShortUrl} />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {}

const mapDispatch = dispatch => {}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
