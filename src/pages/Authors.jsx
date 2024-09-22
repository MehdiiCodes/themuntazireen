import React, { useState } from 'react'
import Avatar1 from '../Images/avatar1.jpg'
import Avatar2 from '../Images/avatar1.jpg'
import Avatar3 from '../Images/avatar1.jpg'
import { Link } from 'react-router-dom'

const authorsData = [

{id: 1, avatar: Avatar1, name: 'Akbar Mehdi', posts: 3},
{id: 2, avatar: Avatar2, name: 'Imam Khomeini', posts: 5},
{id: 3, avatar: Avatar3, name: 'Imam Khamenei', posts:0},
]

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
    <section className='authors'>
      {authors.length > 0 ? <div className="container authors_container">
        {
          authors.map(({id, avatar, name, posts}) => {
            return <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className="author_avatar">
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
                <div className="author_info">
                  <h4>{name}</h4>
                  <p>{posts}</p>
                </div>
            </Link>
          })
        }
      </div> : <h2 className='center'>No users/authors found.</h2>}
    </section>
  )
}

export default Authors