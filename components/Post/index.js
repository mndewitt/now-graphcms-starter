import gql from 'graphql-tag'
import { Query } from 'react-apollo'

// import './styles.css'

const GET_POST = gql`
  query Post($slug: String!) {
    postses(where: { slug: $slug }) {
      createdAt
      updatedAt
      status
      id
      content
      title
      genre
    }
  }
`

const Post = ({ slug }) => (
  <Query query={GET_POST} variables={{ slug }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      const post = data.postses[0]

      return <div>{post.content}</div>
    }}
  </Query>
)

export default Post
