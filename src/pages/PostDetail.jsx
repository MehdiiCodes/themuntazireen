import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../Images/blog2.jpeg'

const PostDetail = () => {
  return (
   <section className='post-detail'>
    <div className="container post-detail_container">
      <div className="post-detail_header">
        <PostAuthor />
        <div className="post-detail_buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
        </div>
      </div>
      <h1>This is the post title!</h1>
      <div className="post-detail_thumbnail">
        <img src={Thumbnail} alt="" />
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores voluptatem nemo, quam numquam cupiditate suscipit atque hic! Suscipit ab non, repellendus assumenda rerum ducimus doloribus! Eaque, minus doloribus enim, repudiandae nemo harum ea a maxime nesciunt similique ad excepturi quibusdam!
      </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat iusto quis at corporis soluta ullam tempora voluptatum itaque repellat suscipit quae ducimus in alias ratione dignissimos nulla amet reiciendis, voluptate aperiam, maxime beatae voluptatem aliquam! Quasi consectetur ipsa ratione molestiae. Magni illum placeat, totam vero esse ratione officiis, facere odit, mollitia veritatis ex explicabo vitae?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quidem quam repellat? Laudantium quam, culpa officiis odit eos tempore at natus deleniti quidem molestias sint voluptas necessitatibus tenetur qui, sapiente repellat corrupti magnam. Quis, a cupiditate impedit veritatis incidunt autem aliquid corrupti, consectetur aspernatur, consequatur aut? Blanditiis sequi illo molestias iusto illum corporis recusandae, ullam architecto sint nisi numquam aliquam et voluptas quis vel culpa. Sit, doloribus! Magnam maxime quidem aliquid corrupti, excepturi officia totam molestiae rem quaerat debitis illo error nisi doloribus enim odit cupiditate ab animi eius laudantium dolorum ex necessitatibus voluptatum! Dolorum perferendis, maxime aliquam consequatur facere porro tenetur officia facilis molestiae corrupti. Ipsam ipsa eaque tenetur ab.
      </p>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum rem a nobis. Aliquid ex voluptates eius rem voluptatum voluptas.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nam, reprehenderit ipsa aut dolor impedit ab atque enim perspiciatis fugit id nobis saepe ullam quia, iure totam quasi explicabo, similique hic ipsam autem. Error labore molestiae officia rerum quas tempora accusantium nam dolorum repudiandae sed fugit delectus, eos mollitia consequuntur quaerat ipsum exercitationem sit ducimus facilis magni accusamus maiores cum hic! Autem expedita nobis culpa possimus cum similique modi distinctio hic odio, recusandae impedit velit placeat debitis voluptate suscipit cupiditate facere deserunt dignissimos officiis ullam eaque odit fugiat? Quos, perspiciatis. Quia architecto, at possimus ducimus impedit magni consectetur adipisci maiores nisi, repellat temporibus fuga tenetur nemo dolore accusamus maxime soluta nostrum voluptatem aut omnis, cumque eaque quisquam? Perspiciatis libero exercitationem aliquam minima maxime sapiente odit porro molestias quis atque soluta laborum quod recusandae quisquam, eveniet hic, fuga accusantium autem magnam laboriosam totam eius consequuntur nostrum. Deleniti omnis, ratione rem delectus eum corrupti architecto, molestias aperiam magni fugit doloremque ex velit voluptatum necessitatibus itaque atque quidem ad iusto ullam? Perferendis culpa error veritatis a corrupti tempora facere dicta eligendi vero quam nobis tenetur distinctio consequatur sequi accusantium laborum dignissimos porro, magni cumque enim libero? Eligendi accusantium aliquid, veritatis expedita ratione illum?
    </p>
    </div>
   </section>
  )
}

export default PostDetail