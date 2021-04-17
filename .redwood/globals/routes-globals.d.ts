import type AboutPageType from '/Users/wiezmankimchi/Documents/CODE/redwoodjs/redwoodblog/web/src/pages/AboutPage/AboutPage'
import type BlogPostPageType from '/Users/wiezmankimchi/Documents/CODE/redwoodjs/redwoodblog/web/src/pages/BlogPostPage/BlogPostPage'
import type ContactPageType from '/Users/wiezmankimchi/Documents/CODE/redwoodjs/redwoodblog/web/src/pages/ContactPage/ContactPage'
import type EditPostPageType from '/Users/wiezmankimchi/Documents/CODE/redwoodjs/redwoodblog/web/src/pages/EditPostPage/EditPostPage'
import type FatalErrorPageType from '/Users/wiezmankimchi/Documents/CODE/redwoodjs/redwoodblog/web/src/pages/FatalErrorPage/FatalErrorPage'
import type HomePageType from '/Users/wiezmankimchi/Documents/CODE/redwoodjs/redwoodblog/web/src/pages/HomePage/HomePage'
import type NewPostPageType from '/Users/wiezmankimchi/Documents/CODE/redwoodjs/redwoodblog/web/src/pages/NewPostPage/NewPostPage'
import type NotFoundPageType from '/Users/wiezmankimchi/Documents/CODE/redwoodjs/redwoodblog/web/src/pages/NotFoundPage/NotFoundPage'
import type PostPageType from '/Users/wiezmankimchi/Documents/CODE/redwoodjs/redwoodblog/web/src/pages/PostPage/PostPage'
import type PostsPageType from '/Users/wiezmankimchi/Documents/CODE/redwoodjs/redwoodblog/web/src/pages/PostsPage/PostsPage'

declare global {
  const AboutPage: typeof AboutPageType
  const BlogPostPage: typeof BlogPostPageType
  const ContactPage: typeof ContactPageType
  const EditPostPage: typeof EditPostPageType
  const FatalErrorPage: typeof FatalErrorPageType
  const HomePage: typeof HomePageType
  const NewPostPage: typeof NewPostPageType
  const NotFoundPage: typeof NotFoundPageType
  const PostPage: typeof PostPageType
  const PostsPage: typeof PostsPageType
}
