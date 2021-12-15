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
          <h4 id="dynamic-styles">Hi, I'm Beau. I'm a product designer, currently based in Wollongong, NSW - an idyllic beach town on the east coast of Australia. I currently work with the design team at <a href="https://www.zendesk.com/">Zendesk</a>.</h4>
          <h5>I love helping teams produce beautiful digital offerings. My ability to sit at the intersection of creativity and logic is what helps me bring value and energy to whatever the challenge my be.</h5>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <p>I love product design because it's like tending to a garden; curating a space that is constantly evolving with the world around it. There are limitations, rules - yet opportunities for a lot of creativity. There can be weeds in the form of design bugs or inconsistent UI elements. Othertimes there are deep roots, like presumptive user rationale, or relics of broken business logic. Amidst these maintenance pieces, within the walled garden, opportunities for creation, clever thinking, and pushing boundaries is abound. It's designing without the blank canvas but, in some ways, it keeps the challenge factor up by pushing me to think beyond pixels. These challenges make me excited, every day, that I get to work as a product designer.</p>
        </div>
        <div className="post-content-body">
          <hr></hr>
        </div>
        <div className="post-content-body">
          <p>Design is only one part of my life, though. When I'm not working I like to spend time with my lovely family; going on walks and picnics, heading to the beach, and chasing Matilda around the house. To relax I like to read, bake, go on runs, play basketball, and listen to/play music 🙂</p>
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
      relativePath: { eq: "me.jpg" }
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