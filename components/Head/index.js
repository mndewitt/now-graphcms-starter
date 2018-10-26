import Head from 'next/head'
import React from 'react'

export default ({ title }) => (
  <Head>
    <title>{title}</title>
    <link
      href="https://fonts.googleapis.com/css?family=Tauri"
      rel="stylesheet"
    />
  </Head>
)
