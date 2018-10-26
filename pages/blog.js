import Head from '../components/Head'
import PostList from '../components/PostList'
import withData from '../lib/apollo'

import './css/normalize.css'
import './css/main.css'

export default withData(() => (
  <React.Fragment>
    <Head title="SHEiLAVA | Blog" />
    <div className="page">
      <PostList />
    </div>
  </React.Fragment>
))
