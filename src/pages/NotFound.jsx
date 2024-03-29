import React from 'react'
import { Main } from '../components/Main'

export const NotFound = ({ message, borders }) => {
  return (
    <Main>
      <div>
        {!borders && <h1>This page doesn't exist</h1>}
        <p>{message}</p>
      </div>
    </Main>
  )
}
