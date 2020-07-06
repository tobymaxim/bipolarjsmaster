import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"
import RegistrationDesktop from "../components/RegistrationDesktop"

const AboutPage = ({ data }) => (

  <Layout data={data}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-container">
      <div className="left-container">
        <div className="blackbox"><h1 className="headline1">About</h1></div>
        <div className="blog-post-general">
          <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
            <div>
              {post.node.featured_media.localFile &&
                <a href={post.node.featured_media.localFile.url}>
                  <img className="about-image" src={post.node.featured_media.localFile.url} alt={post.node.featured_media.alt_text} />
                </a>
              }
              <h2 className="about-title">Bipølar.</h2>
              <div className="about-content" dangerouslySetInnerHTML={{ __html: post.node.content }} />
            </div>
          )}
          </div>
        </div>
        <div className="blackbox"><h1 className="headline1">Crew</h1></div>
        <div className="blog-post-general">
          <div className="artists-images-container">{data.allWordpressPage.edges.map(post =>
            <div>
              {post.node.acf.image_1.localFile && 
                <a href={post.node.acf.image_1.localFile.url}><img className="about-images" src={post.node.acf.image_1.localFile.url} alt="" /></a>
              }
            </div>
          )}
          </div>
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

export default AboutPage


export const query = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "tpl-about.php"}}) {
      edges {
        node {
          acf {
            image_1 {
              localFile {
                url
                childImageSharp {
                  resolutions(width: 1420, height: 660) {
                    src
                  }
                }
              }
            }
          }
          featured_media {
            localFile {
              url
              childImageSharp {
                resolutions(height: 580, width: 580) {
                  src
                }
              }
            }
          }
          content
        }
      }
    }
    allTribeEvents(sort: {order: ASC, fields: start_date}) {
      edges {
        node {
          description
          cost_details {
            currency_symbol
          }
          title
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