// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BlogLayout}>
      <Route path="/contact" page={ContactPage} name="contact" />
        {/* posts */}
        <Route path="/posts/new" page={NewPostPage} name="newPost" />
        <Route path="/posts" page={PostsPage} name="posts" />
        <Route path="/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPage} name="post" />
        <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
        {/* end of posts */}
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
