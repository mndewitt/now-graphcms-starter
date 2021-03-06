import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: '<INSERT GRAPHCMS URL HERE>',
    opts: {
      credentials: 'same-origin'
    }
  })
}

export default withData(config)
