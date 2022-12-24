import React from 'react'
import UserResults from '../components/users/UserResults'

function Home() {
  return (
    <div>
        <UserResults/>
        {process.env.REACT_APP_GITHUB_TOKEN}
    </div>
  )
}

export default Home