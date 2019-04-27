import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Form from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`cabana`, `domain`, `for sale`]} />
    <h1>This Domain Is For Sale</h1>
    <p>To Submit Offer</p>
    <Form />
    <div
      style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: "0 auto" }}
    >
      {/* <Image /> */}
    </div>
  </Layout>
)

export default IndexPage
