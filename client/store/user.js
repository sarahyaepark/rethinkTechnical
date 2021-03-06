import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_USERS = 'GET_USERS'

/**
 * ACTION CREATORS
 */
const gotUsers = data => ({type: GET_USERS, data})

/**
 * THUNK CREATORS
 */
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(gotUsers(data))
    } catch (err) {
      console.log('ERROR fetching users', err)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.data
    default:
      return state
  }
}
