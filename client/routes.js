import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route} from 'react-router-dom'
import {SearchData} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return <Route path="/searchData" component={SearchData} />
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
