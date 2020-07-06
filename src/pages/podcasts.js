import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"
import RegistrationDesktop from "../components/RegistrationDesktop"

const LabelPage = ({ data }) => (

  <Layout data={data}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-container">
      <div className="left-container">
        <div className="blackbox"><h1 className="headline1">Podcasts</h1></div>
        <div className="podcasts-container">{data.allWordpressPage.edges.map(post =>
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.node.content }} />
        )}
        </div>
      </div>
      <div className="right-container">
      <RegistrationDesktop />
        <div className="blackbox">
          <h1 className="headline1">Next Dates</h1>
        </div>
        <Nextdates data={data} />
        <Sociallinks data={data} />
      </div>
    </div>
  </Layout>
)

export default LabelPage


export const query = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "tpl-podcasts.php"}}) {
      edges {
        node {
          content
        }
      }
    }
    allTribeEvents(sort: {order: ASC, fields: start_date}) {
      edges {
        node {
          title
          description
          cost_details {
            currency_symbol
          }
          categories {
            name
            description
          }
          website
          venue {
            venue
            website
            city
            country
          }
          start_date(formatString: "MMM")
          date(formatString: "MMM")
          start_date_details {
            day
          }
        }
      }
    }
    allWordpressWpApiMenusMenusItems {
      edges {
        node {
          slug
          items {
            title
            wordpress_children {
              title
            }
          }
        }
      }
    }
  }    
`