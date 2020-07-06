import React from "react"
import { graphql } from "gatsby"

const Events = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allTribeEvents {
      edges {
        node {
          start_date
          title
        }
      }
    }
  }
`

export default Events