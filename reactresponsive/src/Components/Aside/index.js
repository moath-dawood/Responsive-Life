import React from 'react'
import AboutMe from './AboutMe'
import RecentPosts from './RecentPosts'
import './style.css'

const index = () => {
  return (
    <aside className='sidebar'>
        <AboutMe />
        <RecentPosts />
        <RecentPosts />
        <RecentPosts />
    </aside>
    
  )
}

export default index