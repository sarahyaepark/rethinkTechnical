import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/user'

class SearchData extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      animal: ''
    }
  }
  componentDidMount() {
    this.props.fetchUsers()
    console.log(this.props)
  }
  handleChange(event) {
    let currentLength = event.target.value.length
    console.log(event.target.value, this)
    let match = this.props.users.filter(user => {
      let sub = user.firstName.substring(0, currentLength).toLowerCase()
      console.log(sub)
      return sub === event.target.value
    })
    this.setState({animal: match[0].firstName})
  }
  render() {
    const currentData = this.props.users
    return (
      <div>
        <h1>{this.state.animal}</h1>
        <textarea onChange={this.handleChange} />
        <br />
        <br />
        <br />
        <br />
        {currentData.map(data => <li key={data.id}>{data.firstName}</li>)}
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: state.user
  }
}

const mapDispatch = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapState, mapDispatch)(SearchData)
