import { SignedIn } from '@clerk/nextjs'
import React from 'react'

function Dashboard() {
  return (
    <SignedIn>
        <div>Dashboard</div>
    </SignedIn>
  )
}

export default Dashboard