/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../styles/layout.css"
import "../styles/footer.css"
const Layout = ({ data, children }) => {
  const staticData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header data={data} siteTitle={staticData.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()}
          {` `}
          Bipolar.Berlin
          </p>
      </footer>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout