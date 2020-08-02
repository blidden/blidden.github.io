import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <figure className="kg-card kg-image-card kg-width-wide">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h6 id="dynamic-styles">Hi, I'm Beau. I'm a product designer, currently based in Wollongong, NSW - an idyllic beach town on the east coast of Australia. I've been designing for 7 years, and currently lead the design team at <a href="https://www.accelo.com/">Accelo</a>.</h6>
          <p>
          I love product design because it's like tending to a garden; curating a space that is constantly evolving with the world around it. There are limitations, rules - yet opportunities for a lot of creativity. Sometimes there are weeds in the form of design bugs or inconsistent UI elements. Othertimes there are deep roots, like presumptive user rationale, or relics of broken business logic. Amidst these maintenance pieces, within the walled garden, opportunities for creation, clever thinking, and pushing boundaries is abound. It's designing without the blank canvas but, in some ways, it keeps the challenge factor up by pushing me to think beyond pixels. These challenges make me excited, every day, that I get to work as a product designer.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
