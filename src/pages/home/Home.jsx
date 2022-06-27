import React, { Suspense } from 'react'

import Button from '../../components/button/Button'
// import Button2 from '../../components/button2/Button2' // FIXME

// import Profile from '../../components/profile/Profile'
const Profile = React.lazy(() => import('../../components/profile/Profile'))

export function Home () {
  const [showProfile, setShowProfile] = React.useState(false)

  return (
    <main>
      <h1>Home</h1>
      <hr />
      <div>
        <h2>Buttons</h2>
        <Button>A Button</Button>
        {/* <Button2>A Button</Button2> */}

      </div>
      <hr />
      <div>
        <h2>Lazy loading</h2>
        <button onClick={() => setShowProfile(true)}>
          Show Profile
        </button>
        {showProfile &&
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>}
      </div>
    </main>
  )
}
