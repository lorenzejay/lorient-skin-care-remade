import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{height:'81vh', display: 'flex', justifyContent: 'center'}}>
      <div style={{margin: '30vh auto 0 auto'}}>

      <h1 style={{textAlign: 'center', fontSize: 64}}>404</h1>
      <p style={{fontSize: 20}}>The page you're looking for does not exist.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
