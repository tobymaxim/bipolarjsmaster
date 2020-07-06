import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"
import RegistrationDesktop from "../components/RegistrationDesktop"

const ArtistsPage = ({ data }) => (

  <Layout data={data}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-container">
      <div className="left-container">
        <div className="blackbox"><h1 className="headline1">Artists</h1></div>
        <div className="blog-post">
          <div className="artists-images-container">

            <div className="images-row">


              <div className="images-column">
                <figure>
                  <a href="../izzibizzi"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/izzibizzi-artist.jpg" alt="" />
                    <figcaption className="artists-caption">Izzi Bizzi</figcaption>
                  </a>
                </figure>
              </div>

              <div className="images-column">
                <a href="../rasval">
                  <figure>
                    <img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/rasval-artist.jpg" alt="" />
                    <figcaption className="artists-caption">Rasval</figcaption>

                  </figure>
                </a>
              </div>

              <div className="images-column">
                <figure>
                  <a href="../tobiashall"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/tobiashall-artist.jpg" alt="" />
                    <figcaption className="artists-caption">Tobias Hall</figcaption>
                  </a>
                </figure>
              </div>

              <div className="images-column">
                <figure>
                  <a href="../ones"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/ones-artist.jpg" alt="" />
                    <figcaption className="artists-caption">Ones.</figcaption>
                  </a>
                </figure>
              </div>

              <div className="images-column">
                <figure>
                  <a href="../glsky"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/glsky-artist.jpg" alt="" />
                    <figcaption className="artists-caption">GLSKY</figcaption>
                  </a>
                </figure>
              </div>

              <div className="images-column">
                <figure>
                  <a href="../frederick"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/frederick-artist.jpg" alt="" />
                    <figcaption className="artists-caption">Frederick</figcaption>
                  </a>
                </figure>
              </div>

              <div className="images-column">
                <figure>
                  <a href="../annaground"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/anna-artist.png" alt="" />
                    <figcaption className="artists-caption">Anna Ground</figcaption>
                  </a>
                </figure>
              </div>

            </div>
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

export default ArtistsPage


export const query = graphql`
  query {
    allWordpressPage(filter: {template: {eq: "tpl-artists.php"}}, sort: {fields: guid}) {
      edges {
        node {
          featured_media {
            localFile {
              childImageSharp {
                resolutions(height: 530, width: 530) {
                  src
                }
              }
            }
          }
          title
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
    allInstaNode {
      edges {
        node {
          localFile {
            childImageSharp {
              resolutions(height: 580, width: 580, fit: COVER, cropFocus: CENTER) {
                src
              }
            }
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