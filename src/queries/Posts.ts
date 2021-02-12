import { gql } from "@urql/core"

export const postsQuery = gql`query Posts {
  blogPostCollection(limit: 10){
    items{
      title
      slug
      about
      tagsCollection(limit: 5) {
        items {
          name
        }
      }
    }
  }
}`