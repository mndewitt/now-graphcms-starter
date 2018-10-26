import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'

import './css/normalize.css'
import './css/main.css'

export default () => (
  <React.Fragment>
    <Head title="My Blog" />
    <div className="page">
      <div className="container">
        <h1 className="main-heading">Now/GraphCMS starter</h1>
        <div className="sub-heading">
          <Link prefetch href="/blog">
            BLOG
          </Link>
        </div>
      </div>
    </div>
  </React.Fragment>
)
