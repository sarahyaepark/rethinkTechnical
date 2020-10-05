import React from 'react'
import {connect} from 'react-redux'
import {fetchUrl, postUrl} from '../store/url'
export class ShortUrl extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {}
  handleSubmit(event) {
    event.preventDefault()
    let currentUrl = this.state.value
    this.props.postUrl(currentUrl)
    this.props.fetchUrl(currentUrl)
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Shorten Your Url!
            <br />
            <input type="text" onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <h2>Shortened URL:</h2>
        <h3>{this.props.url}</h3>
      </div>
    )
  }
}
const mapState = state => {
  return {
    url: state.url
  }
}

const mapDispatch = dispatch => ({
  fetchUrl: original => dispatch(fetchUrl(original)),
  postUrl: original => dispatch(postUrl(original))
})

export default connect(mapState, mapDispatch)(ShortUrl)
