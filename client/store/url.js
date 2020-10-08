import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_URL = 'GET_URL'
// const POST_URL = 'POST_URL'

/**
 * INITIAL STATE
 */

/**
 * ACTION CREATORS
 */
const gotUrl = data => ({type: GET_URL, data})
// const postedUrl = data => ({type: POST_URL, data})

/**
 * THUNK CREATORS
 */
// export const fetchUrl = original => {
//   return async dispatch => {
//     try {
//       const {data} = await axios.get(`/api/url/${original}`)
//       dispatch(gotUrl(data))
//     } catch (err) {
//       console.log('ERROR fetching url', err)
//     }
//   }
// }
export const postUrl = original => {
  console.log('POSTING????')
  return async dispatch => {
    try {
      console.log(original)
      const {data} = await axios.post('/api/url', {
        original: original.data.longUrl
      })
      console.log('data', data)
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
