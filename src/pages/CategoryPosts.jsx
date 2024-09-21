import React, { useState } from 'react'
import { MEHDI_POSTS } from '../data'
import PostItem from '../components/PostItem'

const CategoryPosts = () => {
  const [posts, setPosts] = useState(MEHDI_POSTS)

  return (
    <section>
        {posts.length > 0 ? <div className="container posts_container">
        {
            posts.map(({id, thumbnail, category, title, desc, authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
        }
        </div> : <h2 className='center'>No posts founds</h2> }
    </section>
  )
}

export default CategoryPosts