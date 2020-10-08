import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_URL = 'GET_URL'

/**
 * ACTION CREATORS
 */
const gotUrl = data => ({type: GET_URL, data})

export const postUrl = original => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/url', {
        original: original.data.longUrl
      })
      dispatch(gotUrl(data.shortened))
    } catch (err) {
      console.log('ERROR fetching url', err)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_URL:
      return action.data
    default:
      return state
  }
}
