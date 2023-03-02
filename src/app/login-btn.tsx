'use client';

import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <h2 className="mb-2">Welcome, {session.user!.name}</h2>
        <button className="bg-tertiary rounded-md" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button className="bg-tertiary rounded-md" onClick={() => signIn()}>Sign in or Sign up!</button>
    </>
  )
}
