import React, { useState } from 'react'
import PostItem from './PostItem'
import { MEHDI_POSTS } from '../data'


const Posts = () => {
    const [posts, setPosts] = useState(MEHDI_POSTS)
  return (
    
    <section className='posts'>
        {posts.length > 0 ? <div className="posts_container">
        {
            posts.map(({id, thumbnail, category, title, desc, authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
        }
        </div> : <h2 className='center'>No posts founds</h2> }
    </section>
  )
}

export default Posts