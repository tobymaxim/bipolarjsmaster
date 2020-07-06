import React from "react"
import { graphql, } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
import Sociallinks from "../components/Sociallinks"
import Nextdates from "../components/Nextdates"
import RegistrationDesktop from "../components/RegistrationDesktop"

const EventsPage = ({ data }) => (

  <Layout data={data}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="main-container">
      <div className="left-container">
        <div className="blackbox"><h1 className="headline1">Events</h1></div>
        <div className="blog-post">
          <div className="artists-images-container">

            <div className="images-row">


            <div className="images-column">
                <figure>
                  <a href="../onlinegathering"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/06/bipolar_beyond-the-veil.jpg" alt="" />
                    <figcaption className="artists-caption">Bipølar. - Online Gathering</figcaption>
                  </a>
                </figure>
              </div>


              <div className="images-column">
                <figure>
                  <a href="../warehouserave"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/events-warehouserave-nye.jpg" alt="" />
                    <figcaption className="artists-caption">NYE Warehouse Rave</figcaption>
                  </a>
                </figure>
              </div>

              <div className="images-column">
                <a href="../alienritual-theheritage">
                  <figure>
                    <img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/events-alienritual-theheritage.jpg" alt="" />
                    <figcaption className="artists-caption">Alien Ritual - The Heritage</figcaption>

                  </figure>
                </a>
              </div>

              <div className="images-column">
                <figure>
                  <a href="../alienritual-the2ndrise"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/events-alienritual-the2ndrise.png" alt="" />
                    <figcaption className="artists-caption">Alien Ritual - The 2nd Rise</figcaption>
                  </a>
                </figure>
              </div>

              <div className="images-column">
                <figure>
                  <a href="../feelfestival2018"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/events-feelfestival2018.png" alt="" />
                    <figcaption className="artists-caption">Feel Festival</figcaption>
                  </a>
                </figure>
              </div>

              <div className="images-column">
                <figure>
                  <a href="../fuscvernissage"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/events-fusc.png" alt="" />
                    <figcaption className="artists-caption">FUSC Vernissage</figcaption>
                  </a>
                </figure>
              </div>

              <div className="images-column">
                <figure>
                  <a href="../lostfestival2018"><img className="artists-images" src="http://54499171.swh.strato-hosting.eu/bipolarjs/wp-content/uploads/2020/04/events-lost48hfestival.png" alt="" />
                    <figcaption className="artists-caption">Lost 48H Festival</figcaption>
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

export default EventsPage


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