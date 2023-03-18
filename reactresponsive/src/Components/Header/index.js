import React from 'react'
import Nav from './Nav'
import Title from './Title'
import './style.css'

const index = () => {
  return (
    <header>
    <div className="container container-flex">
            <Title />
            <Nav />
        </div>
        </header>
  )
}

export default index