import React from 'react'
import ArticleFeatured from './ArticleFeatured'
import ArticleRecent from './ArticleRecent'
import './style.css'

const index = () => {
  return (
    <div classname="container container-flex">
        <main>
        <ArticleFeatured />
        <ArticleRecent />
        <ArticleRecent />
        <ArticleRecent />
        </main>
    </div>
  )
}

export default index