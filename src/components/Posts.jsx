import React, { useState } from 'react'

import Thumbnail1 from '../Images/blog1.jpeg'
import Thumbnail2 from '../Images/blog2.jpeg'
import Thumbnail3 from '../Images/blog3.jpeg'
import Thumbnail4 from '../Images/blog4.jpeg'
import PostItem from './PostItem'

const MEHDI_POSTS = [
    {
        id:'1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is the title of the very first post on the blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, amet?',
        authorID: 1
    },
    {
        id:'2',
        thumbnail: Thumbnail2,
        category: 'education',
        title: 'This is the title of the very second post on the blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, amet?',
        authorID: 11
    },
    {
        id:'3',
        thumbnail: Thumbnail3,
        category: 'education',
        title: 'This is the title of the very third post on the blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, amet?',
        authorID: 13
    },
    {
        id:'4',
        thumbnail: Thumbnail4,
        category: 'education',
        title: 'This is the title of the very first four on the blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, amet?',
        authorID: 3
    },
]


const Posts = () => {
    const [posts, setPosts] = useState(MEHDI_POSTS)
  return (
    <section className='posts'>
        {
            posts.map(({id, thumbnail, category, title, description, authorID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID}/>)
        }
    </section>
  )
}

export default Posts