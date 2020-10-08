import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/user'
import Animals from './Animals'
import Pagination from './Pagination'

function SearchData({fetchUsers, users}) {
  const [usersLoaded, setUsersLoaded] = useState(false)
  const [animal, setAnimal] = useState('')
  const [sorted, setSorted] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [resultsPerPage] = useState(90)

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(
    () => {
      let userNames = users.map(user => {
        return user.firstName
      })
      setSorted(userNames.sort())
      if (users.length > 0) setUsersLoaded(true)
    },
    [users]
  )

  // this block of code searches for the desired target
  // runs algorithmically because when we load the data, we sort the output once
  // then perform a binary search
  const handleChange = event => {
    let currentLength = event.target.value.length
    let currentEntry = event.target.value
    let left = 0
    let right = sorted.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      let sub = sorted[mid].substring(0, currentLength).toLowerCase()
      if (sub === currentEntry) {
        setAnimal(sorted[mid])
        return
      }
      if (sub < currentEntry) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    setAnimal('')
  }

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const indexOfLastPost = currentPage * resultsPerPage
  const indexOfFirstPost = indexOfLastPost - resultsPerPage
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost)

  return usersLoaded ? (
    <div className="search">
      <h1>🐶 Animal Database 🦁</h1>
      <h3>{animal}</h3>
      <div className="searchBar">
        <textarea className="searchArea" onChange={handleChange} />
        <img
          src="https://www.iconfinder.com/data/icons/hawcons/32/698838-icon-111-search-512.png"
          width="70px"
          height="70px"
        />
      </div>
      <br />
      <br />
      <div className="animals">
        <Animals users={currentPosts} />
      </div>
      <Pagination
        postsPerPage={resultsPerPage}
        totalPosts={sorted.length}
        paginate={paginate}
      />
    </div>
  ) : (
    <img src="https://miro.medium.com/max/1600/1*CsJ05WEGfunYMLGfsT2sXA.gif" />
  )
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
