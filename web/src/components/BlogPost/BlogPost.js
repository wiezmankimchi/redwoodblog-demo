import {routes, Link } from '@redwoodjs/router'
const BlogPost = ({post}) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.blogPost({id: post.id})}>{post.title}</Link>
        </h2>
        <div>{post.body}</div>
      </header>
    </article>
  )
}

export default BlogPost
