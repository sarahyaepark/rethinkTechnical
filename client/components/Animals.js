import React from 'react'

function Animals({users}) {
  return users.map(data => {
    return (
      <li className="individual" key={data.id}>
        {data.firstName}
      </li>
    )
  })
}

export default Animals
