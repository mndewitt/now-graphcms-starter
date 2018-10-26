import Head from '../components/Head'
import Post from '../components/Post'
import withData from '../lib/apollo'

import './css/normalize.css'
import './css/main.css'

export default withData(({ url }) => {
  return (
    <React.Fragment>
      <Head title="SHEiLAVA | Blog Post" />
      <div className="page">
        <Post slug={url.query.slug} />
      </div>
    </React.Fragment>
  )
})
