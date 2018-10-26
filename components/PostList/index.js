import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Link } from '../../routes'

import './styles.css'

const GET_POSTS = gql`
  {
    postses {
      createdAt
      updatedAt
      status
      id
      content
      title
      genre
      slug
    }
  }
`

const PostList = () => (
  <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return data.postses.map(p => (
        <div className="post-list-item" key={p.id}>
          <Link
            prefetch
            className="post-list-item-link"
            route={`blog/${p.slug}`}>
            {p.title}
          </Link>
        </div>
      ))
    }}
  </Query>
)

export default PostList
